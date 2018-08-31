import { Injectable, NgZone } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {

	private sideNav: MatSidenav;

	constructor(private ngZone: NgZone ){

	}

	public setSidenav(sideNav: MatSidenav) {
		this.sideNav = sideNav;
	}

	public toggle(){
		this.ngZone.run(() => {
			this.sideNav.toggle();
		});
	}
}
