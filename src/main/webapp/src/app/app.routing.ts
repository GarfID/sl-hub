import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialog } from "./utils/components/login/login-dialog.component";
import { AuthGuardService } from "./utils/services/auth/auth-guard.service";

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginDialog,
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
	}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
	//enableTracing: true
});