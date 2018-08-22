import { Component } from '@angular/core';
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
		private router: Router
	) {
	}

	public signIn() {
		this.authService.signIn().subscribe( () => {
			console.log('Авторизован!');
			this.router.navigate( ['wishlist'] )
		} );
	}
}
