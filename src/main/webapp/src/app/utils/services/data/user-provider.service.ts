import { Injectable } from '@angular/core';
import { User } from "../../model/user";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UserProviderService {

	private userSource = new BehaviorSubject<User>( null );
	user = this.userSource.asObservable();

	constructor( private userModel: User ) {
		this.userModel.flush();
		this.userSource.next(this.userModel);
	}

	public getUser(): User {
		return this.userSource.getValue();
	}

	updateUser() {
		this.userSource.next( this.userModel );
	}

	setUser( data ) {
		return new Observable( observer => {
			this.userModel.setUser( data ).subscribe( () => {
				this.updateUser();
				observer.next( true );
			} );
		} );
	}


	flush() {
		return new Observable( observer => {
			this.userModel.flush().subscribe( () => {
				this.updateUser();
				observer.next( true );
			} );
		} );
	}
}
