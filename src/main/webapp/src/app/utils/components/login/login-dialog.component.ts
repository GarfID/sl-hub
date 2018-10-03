import { Component, NgZone } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";


@Component( {
	selector: 'app-login',
	templateUrl: './login-dialog.component.html',
	styleUrls: ['./login-dialog.component.css']
} )
export class LoginDialog {

	constructor(
		private authService: AuthService,
		private router: Router,
		private ngZone: NgZone
	) {
	}

	public signIn() {
		this.authService.signIn().subscribe( (res) => {
			if(res) {
				this.authService.signIn().subscribe(() => {
					this.ngZone.run(() => {
						this.authService.getRouter().navigate(['/home']);
					});
				});
			}
		} );
	}
}
