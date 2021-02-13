import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListingComponent } from './vendor-listing/vendor-listing.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { MainComponent } from './main/main.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    VendorListingComponent, 
    AddVendorComponent, 
    MainComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
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
export class VendorModule { }
