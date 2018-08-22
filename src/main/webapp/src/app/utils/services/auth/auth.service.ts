import { Injectable } from "@angular/core";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import { GoogleApiService } from "ng-gapi";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../../model/user";

@Injectable()
export class AuthService {

	constructor( private googleAuthService: GoogleAuthService,
	             private gapiService: GoogleApiService,
	             public user: User,
	             private router: Router,
	             private http: HttpClient
	) {
		this
			.gapiService
			.onLoad()
			.subscribe();
	}

	getRouter(): Router {
		return this.router
	}

	//TODO: перенести редиректы в отдельный Router
	signIn(): Observable<boolean> {
		return new Observable( observer => {
			this.googleAuthService.getAuth().subscribe( ( auth ) => {
				auth.signIn().then( () => {
					this.getServerResponce( "/user/login", auth.currentUser.get().getAuthResponse().id_token ).subscribe( data => {
						switch (data['status']) {
							case 21:
							case 25:
								console.log('Успешно получил пользователя');
								this.user.setUser( data['user'] ).subscribe( res => {
									observer.next( res );
								} );
								break;
							case 45:
								observer.next( false );
								break;
						}
					} );
				} );
			} );
		} );
	}

	//TODO: перенести редиректы в отдельный Router
	public signOut(): Observable<boolean> {
		return new Observable( observer => {
			this.googleAuthService.getAuth().subscribe( auth => {
				try {
					auth.signOut();
					this.user.flush().subscribe(res => setTimeout(() => {
						observer.next(res);
					}, 150));

				} catch (e) {
					observer.next( false );
				}
			});
		});
	}

	public isLoggedIn(): Observable<boolean> {
		return new Observable<boolean>( observer => {
			this.googleAuthService.getAuth().subscribe( auth => {
				this.getServerResponce( "/user/auth", auth.currentUser.get()
					.getAuthResponse().id_token ).subscribe( data => {
					switch (data['status']) {
						case 45:
							if ( this.user.id == null ) {
								observer.next( false )
							} else {
								this.signIn().subscribe( () => {
										this.isLoggedIn().subscribe( res => {
												observer.next( res );
											}
										);
									}
								);
							}
							break;
						case 44:
							observer.next( false );
							break;
						case 25:
							if ( this.user.state == null || this.user.state != data['state'] ) {
								this.getServerResponce( '/user/sync', auth.currentUser.get()
									.getAuthResponse().id_token ).subscribe( data => {
										this.user.setUser(data['user']).subscribe(() => {
											observer.next( true );
										})
								} );
							} else {
								observer.next( true );
							}
							break;
					}
				} );
			} );
		} );
	}

	public getServerResponce( url: String, token: string ) {
		return new Observable( observer => {
			let body = new FormData();
			body.append( 'token', token );
			this.http.post( 'http://localhost:8080' + url, body ).subscribe( data => {
				observer.next( data );
			} );
		} );
	}
}