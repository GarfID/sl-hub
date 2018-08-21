import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()

export class AuthGuardService implements CanActivate {

	constructor( private authService: AuthService ) {
	}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
		console.log('Я еду в ' + state.url);
		return this.checkLogin( state.url );
	}

	checkLogin( url: String ): Observable<boolean> {
		return new Observable<boolean>( observer => {
			this.authService.isLoggedIn().subscribe( res => {

				if ( res ) {
					if ( url == '/login' ) {
						console.log('Че я тут делаю?');
						this.authService.getRouter().navigate( ['/wishlist'] );
						observer.next( false );
					} else {
						console.log('Ну, я пошел');
						observer.next( true );
					}
				} else {
					console.log('Я не авторизован');
					if(url == '/login') {
						observer.next(true);
					} else {
						this.authService.getRouter().navigate( ['/login'] );
						observer.next( false );
					}
				}
			} );
		} );
	}
}
