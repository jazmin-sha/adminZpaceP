import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module.';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { DemoMaterialModule } from '../demo-material-module';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main/main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
 
@NgModule({
  declarations: [
    AllProductsComponent,
    AddProductsComponent,
    MainComponent
    ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DemoMaterialModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgMultiSelectDropDownModule
  ],
  providers:[],
  
})
export class ProductsModule { }
