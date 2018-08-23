import { Component, NgZone } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";


@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
} )
export class LoginComponent {

	constructor(
		private authService: AuthService,
		private router: Router,
		private ngZone: NgZone
	) {
	}

	public signIn() {
		this.authService.signIn().subscribe( () => {
			this.ngZone.run(() => {
				this.router.navigate( ['wishlist'] );
			});
		} );
	}
}
