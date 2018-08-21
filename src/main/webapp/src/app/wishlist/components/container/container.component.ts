import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../../utils/services/auth/auth.service";

@Component( {
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
} )
export class ContainerComponent {

	@Output() loggedOut = new EventEmitter<boolean>();

	constructor( private authService: AuthService ) {
	}

	signOut() {
		this.authService.signOut().subscribe();
	}
}
