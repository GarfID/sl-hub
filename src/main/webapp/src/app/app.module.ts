import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginDialog } from './utils/components/login/login-dialog.component';

import { GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig, } from "ng-gapi";
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
import { SidenavService } from "./home/services/side-nav-service.service";
import { HTTPConnectorService } from "./utils/services/HTTPConnectorService";


const gapiClientConfig: NgGapiClientConfig = {
	client_id: "793835333693-3vm2oobhs289tfhrod3uhintopibb0gg.apps.googleusercontent.com",
	discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
	scope: "email"
};

@NgModule( {
	declarations: [
		AppComponent,
		LoginDialog,
		LoaderComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MaterialExporterModule,
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
		HttpClientModule,
		User,
		SidenavService,
		HTTPConnectorService
	],
	entryComponents: [AppComponent, LoginDialog],
	bootstrap: [AppComponent]
} )
export class AppModule {
}
