import { Component } from '@angular/core';
import { SidenavService } from "../side-nav/services/side-nav-service.service";

@Component( {
	selector: 'app-tool-bar',
	templateUrl: './tool-bar.component.html',
	styleUrls: ['./tool-bar.component.scss']
} )
export class ToolBarComponent{

	constructor( private sideNavService: SidenavService) {
	}

	toggleRightSidenav() {
		this.sideNavService.toggle();
	}
}
