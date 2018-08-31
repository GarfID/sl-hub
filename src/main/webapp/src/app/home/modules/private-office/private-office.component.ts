import { UserProviderService } from "../../../utils/services/data/user-provider.service";
import { Component, NgZone, OnInit } from '@angular/core';
import { User } from "../../../utils/model/user";

@Component( {
    selector: 'app-private-office',
    templateUrl: './private-office.component.html',
    styleUrls: ['./private-office.component.scss']
} )
export class PrivateOfficeComponent implements OnInit {

    public user: User;

    constructor( private ngZone: NgZone,
                 private userProvider: UserProviderService ) {
    }

    ngOnInit() {
        this.ngZone.run(() => {
            this.userProvider.user.subscribe( user => {
                this.user = user;
            });
        });
    }

}
