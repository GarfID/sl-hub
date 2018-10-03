import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Crate } from "./crate";
import { HTTPConnectorService } from "../services/HTTPConnectorService";

@Injectable()
export class User {

	public id: number;
	public email: String;
	public googleId: String;
	public userImage: String;
	public crates: Array<Crate>;
	public state: String;
	public isAdmin: boolean;

	constructor(private httpConnector: HTTPConnectorService) {
	}

	public setUser( data?: Object ): Observable<boolean> {
		return new Observable( observer => {
			console.log(data);
			this.id = data['id'];
			this.email = data['email'];
			this.googleId = data['googleId'];
			this.state = data['state'];
			this.userImage = data['picture'];
			this.isAdmin = data['isAdmin'];
			observer.next( true );
		} );
	}

	flush(): Observable<boolean> {
		return new Observable( observer => {
			this.id = null;
			this.email = null;
			this.googleId = null;
			this.userImage = null;
			this.state = null;
			this.crates = null;
			this.isAdmin = null;
			observer.next( true );
		} );
	};
}