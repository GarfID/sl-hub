import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { AuthGuardService } from "../utils/services/auth/auth-guard.service";

const homeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: '**',
		redirectTo: '',
		canActivate: [AuthGuardService]
	}
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);