import {
    Component, NgZone,
    OnInit
} from '@angular/core';
import { User } from "../../../utils/model/user";

@Component( {
    selector: 'app-container',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css']
} )
export class WishListComponent implements OnInit {

    user: User;

    constructor(private ngZone: NgZone) {
    }

    ngOnInit(): void {
    }
}
