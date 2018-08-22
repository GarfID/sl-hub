import { Injectable, NgZone } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class User {

	public id: number = null;
	public email: String = null;
	public googleId: String = null;
	public state: String = null;

	public idSub: Subject<number> = new Subject<number>();
	public emailSub: Subject<String> = new Subject<String>();
	public googleIdSub: Subject<String> = new Subject<String>();
	public stateSub: Subject<String> = new Subject<String>();

	constructor(
		private zone: NgZone ) {
		this.idSub.subscribe(value => {
			this.id = value;
		});
		this.emailSub.subscribe(value => {
			this.email = value;
		});
		this.googleIdSub.subscribe(value => {
			this.googleId = value;
		});
		this.stateSub.subscribe(value => {
			this.state = value;
		});
	}

	public changeId(newId: number){
		this.idSub.next(newId);
	}

	public setUser( data?: Object ): Observable<boolean> {
		return new Observable( observer => {
			console.log( data );
			this.zone.run( () => {
				this.changeId(data['id']);
				this.email = data['email'];
				this.googleId = data['googleId'];
				this.state = data['state'];
			} );

			observer.next( true );
		} );
	}

	flush(): Observable<boolean> {
		return new Observable( observer => {
			this.zone.run(()=> {
				this.id = null;
				this.email = null;
				this.googleId = null;
				this.state = null;
			});
			observer.next( true );
		} );
	};
}