import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AllInventryListComponent } from './all-inventry-list/all-inventry-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { OffersComponent } from './offers/offers.component';
import { MainComponent } from './main/main.component';
import { DemoMaterialModule } from '../demo-material-module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AllInventryListComponent, 
    CreateStockComponent, 
    UpdateStockComponent,
     OffersComponent, 
     MainComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
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
export class InventoryModule { }
