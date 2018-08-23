import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class User {

	public id: number;
	public email: String;
	public googleId: String;
	public state: String;

	constructor() {
	}

	public setUser( data?: Object ): Observable<boolean> {
		return new Observable( observer => {
			this.id = data['id'];
			this.email = data['email'];
			this.googleId = data['googleId'];
			this.state = data['state'];
			observer.next( true );
		} );
	}

	flush(): Observable<boolean> {
		return new Observable( observer => {
			this.id = null;
			this.email = null;
			this.googleId = null;
			this.state = null;
			observer.next( true );
		} );
	};
}