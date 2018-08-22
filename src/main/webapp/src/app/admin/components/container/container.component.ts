import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../../utils/services/auth/auth.service";
import { Router } from "@angular/router";

@Component( {
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
} )
export class ContainerComponent {

	@Output() loggedOut = new EventEmitter<boolean>();

	constructor( private authService: AuthService,
	             private router: Router) {}

	signOut() {
		this.authService.signOut().subscribe(() => this.router.navigate(['/login']));
	}
}
