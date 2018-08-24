import { Component, NgZone,  ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material";

@Component({
  selector: 'app-user-ear',
  templateUrl: './user-ear.component.html',
  styleUrls: ['./user-ear.component.scss']
})
export class UserEarComponent{

  @ViewChild('menuTrigger') userEarMenu:MatMenuTrigger;

  constructor(private ngZone: NgZone) { }

  openMenu(){
  	this.ngZone.run(() => {
	    this.userEarMenu.toggleMenu();
    });
  }
}
