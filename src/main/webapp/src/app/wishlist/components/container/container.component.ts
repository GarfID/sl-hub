import { ApplicationRef, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from "../../../utils/services/auth/auth.service";
import { User } from "../../../utils/model/user";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component( {
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
} )
export class ContainerComponent{

	id: Observable<number>;
	email: Observable<String>;
	googleId: Observable<String>;
	state: Observable<String>;


	constructor( private authService: AuthService, public user: User, private router: Router, private changeDec: ChangeDetectorRef) {
		this.id = this.user.getId();
		this.email = this.user.getEmail();
		this.googleId = this.user.getGoogleId();
		this.state = this.user.getState();
	}



	debug() {
		console.log(this.user);
	}

	signOut() {
		this.authService.signOut().subscribe(() => this.router.navigate(['login']));
	}
}
