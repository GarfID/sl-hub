import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material";
import { AuthService } from "../../../utils/services/auth/auth.service";
import { Router } from "@angular/router";
import { UserProviderService } from "../../../utils/services/data/user-provider.service";
import { User } from "../../../utils/model/user";

@Component({
  selector: 'app-user-ear',
  templateUrl: './user-ear.component.html',
  styleUrls: ['./user-ear.component.scss']
})
export class UserEarComponent implements OnInit{

  @ViewChild('menuTrigger') userEarMenu:MatMenuTrigger;

  public user:User;

  constructor(private ngZone: NgZone, private authService:AuthService, private router:Router, private userProvider: UserProviderService) { }

  openMenu(){
  	this.ngZone.run(() => {
	    this.userEarMenu.toggleMenu();
    });
  }

	signOut() {
		this.authService.signOut().subscribe( () => {
			this.ngZone.run(() => {
				this.router.navigate( ['login'] );
			});
		} );
	}

	ngOnInit(): void {
  	    this.userProvider.user.subscribe(user => {
  	    	this.ngZone.run(() => {
  	    		this.user = user;
	        });
        })
	}
}
