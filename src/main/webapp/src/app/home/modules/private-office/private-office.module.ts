import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateOfficeComponent } from './private-office.component';
import { PrivateOfficeRouterModule } from "./private-office-router.module";
import { MaterialExporterModule } from "../../../utils/modules/material-exporter/material-exporter.module";

@NgModule({
  imports: [
    CommonModule,
      PrivateOfficeRouterModule,
      MaterialExporterModule,
  ],
  declarations: [PrivateOfficeComponent]
})
export class PrivateOfficeModule { }
