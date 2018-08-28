import { Injectable } from "@angular/core";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import { GoogleApiService } from "ng-gapi";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserProviderService } from "../data/user-provider.service";

@Injectable()
export class AuthService {

	constructor( private googleAuthService: GoogleAuthService,
	             private gapiService: GoogleApiService,
	             private userProvider: UserProviderService,
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

	signIn(): Observable<boolean> {
		return new Observable( observer => {
			this.googleAuthService.getAuth().subscribe( ( auth ) => {
				auth.signIn().then( () => {
					this.getServerResponce( "/user/login", auth.currentUser.get().getAuthResponse().id_token ).subscribe( data => {
						switch (data['status']) {
							case 21:
							case 25:
								this.getUserPicture().subscribe(url => {
									data['user']['picture'] = url;
									this.userProvider.setUser( data['user']);
									observer.next( true );
								});
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

	public signOut(): Observable<boolean> {
		return new Observable( observer => {
			this.googleAuthService.getAuth().subscribe( auth => {
				try {
					auth.signOut();

					setTimeout( () => {
						this.userProvider.flush().subscribe(() => {
							observer.next( true );
						});
					}, 50 );

				} catch (e) {
					observer.next( false );
				}
			} );
		} );
	}

	public isLoggedIn(): Observable<boolean> {
		return new Observable<boolean>( observer => {
			this.googleAuthService.getAuth().subscribe( auth => {
				this.getServerResponce( "/user/auth", auth.currentUser.get()
					.getAuthResponse().id_token ).subscribe( data => {
					switch (data['status']) {
						case 45:
							if ( this.userProvider.getUser().state == null ) {
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
							observer.next( false );
							break;
						case 44:
							observer.next( false );
							break;
						case 25:
							if ( this.userProvider.getUser().state == null || this.userProvider.getUser().state != data['state'] ) {
								this.getServerResponce( '/user/sync', auth.currentUser.get()
									.getAuthResponse().id_token ).subscribe( data => {
									this.getUserPicture().subscribe(url => {
										data['user']['picture'] = url;
										this.userProvider.setUser( data['user']).subscribe(() => {
											observer.next( true );
										});
									});
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

	public getUserPicture(): Observable<String>{
		return new Observable(observer => {
			this.googleAuthService.getAuth().subscribe(auth => {
				observer.next(auth.currentUser.get().getBasicProfile()['Paa']);
			})
		});
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