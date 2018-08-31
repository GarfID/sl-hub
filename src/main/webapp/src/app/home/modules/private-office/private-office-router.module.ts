import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "../../../utils/services/auth/auth-guard.service";
import { PrivateOfficeComponent } from "./private-office.component";

const wishListRoutes: Routes = [
    {
        path: '',
        component: PrivateOfficeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule( {
    imports: [RouterModule.forChild( wishListRoutes )],
    exports: [RouterModule]
} )

export class PrivateOfficeRouterModule {

}