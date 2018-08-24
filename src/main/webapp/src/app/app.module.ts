import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './utils/components/login/login.component';

import {
	GoogleApiModule,
	NgGapiClientConfig,
	NG_GAPI_CONFIG,
} from "ng-gapi";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from './utils/components/loader/loader.component';
import { MaterialExporterModule } from "./utils/modules/material-exporter/material-exporter.module";
import { AuthGuardService } from "./utils/services/auth/auth-guard.service";
import { AuthService } from "./utils/services/auth/auth.service";
import { User } from "./utils/model/user";
import { UserProviderService } from "./utils/services/data/user-provider.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidenavService } from "./home/components/side-nav/services/side-nav-service.service";
import { MatNativeDateModule } from "@angular/material";

const gapiClientConfig: NgGapiClientConfig = {
	client_id: "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com",
	discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
	scope: "email"
};

@NgModule( {
	declarations: [
		AppComponent,
		LoginComponent,
		LoaderComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MaterialExporterModule,
		MatNativeDateModule,
		FormsModule,
		ReactiveFormsModule,
		GoogleApiModule.forRoot( {
			provide: NG_GAPI_CONFIG,
			useValue: gapiClientConfig
		} ),
		AppRouting
	],
	providers: [
		AuthService,
		AuthGuardService,
		UserProviderService,
		User,
		SidenavService,
		],
	entryComponents: [AppComponent],
	bootstrap: [AppComponent]
} )
export class AppModule {
}
