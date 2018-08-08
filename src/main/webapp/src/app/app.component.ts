import { Component } from '@angular/core';

import {
  GoogleApiService,
  GoogleAuthService,
} from "ng-gapi";
import { UserService } from "./services/auth-service.service";


@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
} )

export class AppComponent  {

  isSigned:boolean;

  constructor(private userService: UserService,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
    this.gapiService.onLoad().subscribe();
  }

  public isLoggedIn(): boolean {
    return UserService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }
}

