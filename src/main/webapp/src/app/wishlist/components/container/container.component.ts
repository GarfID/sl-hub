import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../../utils/services/auth/auth.service";
import { User } from "../../../utils/model/user";
import { Router } from "@angular/router";

@Component( {
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
} )
export class ContainerComponent{

	@Output() loggedOut = new EventEmitter<boolean>();

	constructor( private authService: AuthService, public user: User, private router: Router) {
	}

	get id(): number {
		return this.user.id;
	}

	debug() {
		console.log(this.user);
	}

	signOut() {
		this.authService.signOut().subscribe(() => this.router.navigate(['login']));
	}
}
