import {
    Component, NgZone,
    OnInit,
    ViewChild
} from '@angular/core';
import { MatMenuTrigger, MatSidenav } from "@angular/material";
import { SidenavService } from "./services/side-nav-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProviderService } from "../utils/services/data/user-provider.service";
import { User } from "../utils/model/user";
import { AuthService } from "../utils/services/auth/auth.service";

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {

    @ViewChild( 'sidenav') sideNav: MatSidenav;
    @ViewChild( 'menuTrigger' ) userEarMenu: MatMenuTrigger;

	public scrollbarOptions = { axis: 'x', theme: 'minimal-dark' };
	public navLinks: Array<Object> = [];
    public user: User;
    public background = 'primary';
    public activeLink: Object;

	constructor(private sideNavService: SidenavService,
                private ngZone:NgZone,
                private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService,
                private userProvider: UserProviderService) {
	    this.navLinks.push({label: 'Хотелка', dest: '/home/wishlist'});
        this.navLinks.push({label: 'Личный кабинет', dest: '/home/private-office'});
        this.navLinks.push({label: 'Админ', dest: '/home/admin'});
        this.activeLink = this.navLinks[0];
	}

	navTo(link) {
	    this.ngZone.run(() => {
	        this.ngZone.run(() => {
	            this.router.navigate([link.dest], {relativeTo: this.route});
	            this.activeLink = link;
            });
        });
    }

    openMenu() {
        this.ngZone.run( () => {
            this.userEarMenu.toggleMenu();
        } );
    }

    toggleSidenav() {
	    this.ngZone.run(() => {
	        this.sideNavService.toggle();
        });
    }

    signOut() {
        this.authService.signOut().subscribe( () => {
            this.ngZone.run( () => {
                this.router.navigate( ['login'] );
            } );
        } );
    }

	ngOnInit(): void {
	    this.userProvider.user.subscribe(user => {
	        this.ngZone.run(() => {
	            this.user = user;
	            this.sideNavService.setSidenav(this.sideNav);
            })
        });
	}
}
