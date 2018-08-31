import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from "./wishlist.component";
import { WishListRouterModule } from "./wishlist-router.module";
import { MaterialExporterModule } from "../../../utils/modules/material-exporter/material-exporter.module";

@NgModule( {
	imports: [
		CommonModule,
        WishListRouterModule,
        MaterialExporterModule
	],
	declarations: [
        WishListComponent
	]
} )
export class WishListModule {
}
