import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialExporterModule } from "../utils/modules/material-exporter/material-exporter.module";
import { HomeRouting } from "./home.routing";
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
	PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PrivateOfficeModule } from "./modules/private-office/private-office.module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule( {
	imports: [
		CommonModule,
		MaterialExporterModule,
		HomeRouting,
		PerfectScrollbarModule,
		PrivateOfficeModule
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}],
	declarations: [HomeComponent],
} )
export class HomeModule {
}
