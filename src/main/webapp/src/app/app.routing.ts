import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./utils/components/login/login.component";
import { AuthGuardService } from "./utils/services/auth/auth-guard.service";

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule',
		canActivate: [AuthGuardService]
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);