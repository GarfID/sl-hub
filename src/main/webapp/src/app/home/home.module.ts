import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MaterialExporterModule } from "../utils/modules/material-exporter/material-exporter.module";
import { HomeRouting } from "./home.routing";
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule( {
	imports: [
		CommonModule,
		MaterialExporterModule,
		HomeRouting
	],
	declarations: [HomeComponent, ToolBarComponent, SideNavComponent],
} )
export class HomeModule {
}
