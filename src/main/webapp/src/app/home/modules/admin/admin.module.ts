import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AuthService } from "../../../utils/services/auth/auth.service";
import { AdminRouterModule } from "./admin-router.module";
import { SidenavService } from "../../services/side-nav-service.service";
import { MaterialExporterModule } from "../../../utils/modules/material-exporter/material-exporter.module";

@NgModule( {
	imports: [
		CommonModule,
		AdminRouterModule,
		MaterialExporterModule
	],
	declarations: [AdminComponent],
	providers: [AuthService, SidenavService]
} )
export class AdminModule {
}
