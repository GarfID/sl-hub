import {
	Component,
	OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../../../utils/services/auth/auth.service";
import { UserProviderService } from "../../../../../utils/services/data/user-provider.service";
import { User } from "../../../../../utils/model/user";

@Component( {
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
} )
export class ContainerComponent implements OnInit {

	user: User;

	constructor( private authService: AuthService, private router: Router, private route: ActivatedRoute, private userProvider: UserProviderService ) {
	}

	ngOnInit(): void {
		this.userProvider.user.subscribe( user => this.user = user );
	}


}
