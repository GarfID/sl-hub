import {
	Component,
	OnInit,
	ViewChild
} from '@angular/core';
import { MatSidenav } from "@angular/material";
import { SidenavService } from "./components/side-nav/services/side-nav-service.service";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

	@ViewChild('sidenav') private sidenav: MatSidenav;
	public scrollbarOptions = { axis: 'x', theme: 'minimal-dark' };

	constructor(private sideNavService: SidenavService) {
	}

	ngOnInit(): void {
		this.sideNavService.setSidenav(this.sidenav);
	}
}
