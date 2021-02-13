import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesDetailsListComponent } from './sales-details-list/sales-details-list.component';
import { SalesReturnDetailComponent } from './sales-return-detail/sales-return-detail.component';
import { MainComponent } from './main/main.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SalesDetailsListComponent,
              SalesReturnDetailComponent, 
              MainComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    DemoMaterialModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgMultiSelectDropDownModule,
    MatButtonModule
  ]
})
export class SalesModule { }
