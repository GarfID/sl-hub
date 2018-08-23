import { Component, OnInit } from '@angular/core';
import { SidenavService } from "../side-nav/services/side-nav-service.service";

@Component( {
	selector: 'app-tool-bar',
	templateUrl: './tool-bar.component.html',
	styleUrls: ['./tool-bar.component.css']
} )
export class ToolBarComponent implements OnInit {

	isSideNavActive: boolean = false;

	constructor( private sideNavService: SidenavService ) {
	}

	toggleRightSidenav() {
		this.isSideNavActive = !this.isSideNavActive;
		this.sideNavService.toggle();
	}

	ngOnInit() {
	}

}
