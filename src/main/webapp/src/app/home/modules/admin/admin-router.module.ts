import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { AuthGuardService } from "../../../utils/services/auth/auth-guard.service";

const adminRoutes: Routes = [
	{
		path: '',
		component: AdminComponent,
		canActivate: [AuthGuardService]
	}
];

@NgModule( {
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule]
} )

export class AdminRouterModule {

}