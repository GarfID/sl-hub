import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

// @ts-ignore
@Injectable()

export class AuthGuardService implements CanActivate, CanLoad {

	constructor( private authService: AuthService,
	             private ngZone: NgZone) {
	}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
		return this.checkLogin( state.url );
	}

	canLoad(route: Route): Observable<boolean> {
		let url = `/${route.path}`;

		return this.checkLogin(url);
	}

	checkLogin( url: String ): Observable<boolean> {
		return new Observable<boolean>( observer => {
			this.authService.isLoggedIn().subscribe( res => {
				this.ngZone.run(() => {
					if ( res ) {
						if ( url == '/login' ) {
							this.authService.getRouter().navigate( ['home'] );
							observer.next( false );
						} else {
							observer.next( true );
						}
					} else {
						if(url == '/login') {
							observer.next(true);
						} else {
							this.ngZone.run(() =>{
								this.authService.getRouter().navigate(['login']);
								observer.next(false);
							});
						}
					}
				});
			} );
		} );
	}
}
