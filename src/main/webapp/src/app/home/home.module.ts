import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MaterialExporterModule } from "../utils/modules/material-exporter/material-exporter.module";
import { HomeRouting } from "./home.routing";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
	PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { UserEarComponent } from './components/user-ear/user-ear.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule( {
	imports: [
		CommonModule,
		MaterialExporterModule,
		HomeRouting,
		PerfectScrollbarModule
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}],
	declarations: [HomeComponent, ToolBarComponent, SideNavComponent, UserEarComponent],
} )
export class HomeModule {
}
