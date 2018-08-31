import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { AuthGuardService } from "../utils/services/auth/auth-guard.service";

const homeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'admin',
				loadChildren: './modules/admin/admin.module#AdminModule',
				canActivate: [AuthGuardService]
			},
			{
				path: 'wishlist',
				loadChildren: './modules/wishlist/wishlist.module#WishListModule',
				canActivate: [AuthGuardService]
			},
            {
                path: 'private-office',
                loadChildren: './modules/private-office/private-office.module#PrivateOfficeModule',
                canActivate: [AuthGuardService]
            },
		]
	}
];

@NgModule( {
	imports: [RouterModule.forChild(homeRoutes)],
	exports: [RouterModule]
} )

export class HomeRouting {

}