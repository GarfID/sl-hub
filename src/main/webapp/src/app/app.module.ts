import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './wishlist/components/container/container.component';
import { LoginComponent } from './utils/components/login/login.component';


import {
	GoogleApiModule,
	NgGapiClientConfig,
	NG_GAPI_CONFIG,
} from "ng-gapi";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from './utils/components/loader/loader.component';
import { PageNotFoundComponent } from './utils/components/page-not-found/page-not-found.component';
import { MaterialExporterModule } from "./utils/modules/material-exporter/material-exporter.module";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./utils/services/auth/auth-guard.service";
import { AuthService } from "./utils/services/auth/auth.service";

const gapiClientConfig: NgGapiClientConfig = {
	client_id: "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com",
	discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
	scope: "email"
};

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'wishlist',
		component: ContainerComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: '',
		redirectTo: '/wishlist',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule( {
	declarations: [
		AppComponent,
		ContainerComponent,
		LoginComponent,
		LoaderComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		MaterialExporterModule,
		GoogleApiModule.forRoot( {
			provide: NG_GAPI_CONFIG,
			useValue: gapiClientConfig
		} ),
		RouterModule.forRoot(
			appRoutes
		)
	],
	providers: [AuthService, AuthGuardService],
	entryComponents: [AppComponent],
	bootstrap: [AppComponent]
} )
export class AppModule {
}
