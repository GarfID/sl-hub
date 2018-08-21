import { Injectable } from "@angular/core";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import { GoogleApiService } from "ng-gapi";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

	constructor( private googleAuthService: GoogleAuthService,
	             private gapiService: GoogleApiService,
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
				if ( auth.isSignedIn.get() ) {
					let body = new FormData();
					body.append( 'token', auth.currentUser.get().getAuthResponse().id_token );
					this.http.post( 'http://localhost:8080/auth', body ).subscribe( data => {
						const res = <boolean>data;
						console.log("Сервер ответил " + res);
						if ( res ) {
							console.log("Я авторизован. Иду на главную");
							this.router.navigate( ['/wishlist'] );
							observer.next( true )
						} else {
							observer.next( false );
						}
					} );
					observer.next( true );
				} else {
					this.googleAuthService.getAuth().subscribe( ( auth ) => {
						auth.signIn().then( () => {
							let body = new FormData();
							body.append( 'token', auth.currentUser.get().getAuthResponse().id_token );
							this.http.post( 'http://localhost:8080/auth', body ).subscribe( data => {
								const res = <boolean>data;
								console.log("Сервер ответил " + res);
								if ( res ) {
									console.log("Я авторизован. Иду на главную");
									this.router.navigate( ['/wishlist'] );
									observer.next( true )
								} else {
									observer.next( false );
								}
							} );
						}, () => {
							observer.next( false );
						} );
					} );
				}
			} );
		} );
	}

	//TODO: перенести редиректы в отдельный Router
	public signOut(): Observable<boolean> {
		return new Observable(observer => {
			this.isLoggedIn().subscribe( res => {
				if ( !res ) {
					console.log( "И че дальше?" );
					this.router.navigate(['/wishlist']).then(() => {
						observer.next(true);
					});
				} else {
					console.log("Досвидания!");
					this.googleAuthService.getAuth().subscribe( auth => {
						try {
							auth.signOut();
							setTimeout(() => {
								this.isLoggedIn().subscribe(res => {
									console.log("Я думаю его авторизация = " + res);
									if(!res) {
										console.log('Ты кто такой? Пиздуй отсюда!');
										this.router.navigate(['/login']);
									}
									observer.next( !res );
								});
							}, 150);
						} catch (e) {
							observer.next(false);
						}
					});
				}
			} );
		});
	}

	public isLoggedIn(): Observable<boolean> {
		return new Observable<boolean>( observer => {
			this.googleAuthService.getAuth().subscribe( auth => {
				let body = new FormData();
				body.append( 'token', auth.currentUser.get().getAuthResponse().id_token );
				this.http.post( 'http://localhost:8080/auth', body ).subscribe( data => {
						observer.next( <boolean>data );
					}
				);
			} );
		} );
	}
}