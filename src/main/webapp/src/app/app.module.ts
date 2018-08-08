import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';


import {
  GoogleApiModule,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
} from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com",
  discoveryDocs: [],
  cookie_policy: 'single_host_origin',
  hosted_domain: 'http://localhost:4200'
};

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
