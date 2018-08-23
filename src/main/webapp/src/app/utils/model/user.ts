import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class User {

	public id: BehaviorSubject<number> = new BehaviorSubject<number>( null );
	public email: BehaviorSubject<String> = new BehaviorSubject<String>( null );
	public googleId: BehaviorSubject<String> = new BehaviorSubject<String>( null );
	public state: BehaviorSubject<String> = new BehaviorSubject<String>( null );

	constructor() {
	}

	public setUser( data?: Object ): Observable<boolean> {
		return new Observable( observer => {
			console.log("Обновляю пользователя");
			this.id.next( data['id'] );
			this.email.next( data['email'] );
			this.googleId.next( data['googleId'] );
			this.state.next( data['state'] );
			console.log(this);
			observer.next( true );
		} );
	}

	flush(): Observable<boolean> {
		return new Observable( observer => {
			console.log("Сбрасываю пользователя");
			this.id.next( null );
			this.email.next( null );
			this.googleId.next( null );
			this.state.next( null );
			console.log(this);
			observer.next( true );
		} );
	};

	public getId(){
		return this.id.asObservable();
	}


	public getEmail(){
		return this.email.asObservable();
	}


	public getGoogleId(){
		return this.googleId.asObservable();
	}


	public getState(){
		return this.state.asObservable();
	}
}