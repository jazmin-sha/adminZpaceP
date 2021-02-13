import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { RegCustomerComponent } from './reg-customer/reg-customer.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { DemoMaterialModule } from '../demo-material-module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormModule } from '../forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddCustomerComponent,
     RegCustomerComponent, 
     CustomerMainComponent,
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DemoMaterialModule,
    MatCardModule,
    MatTabsModule,
    FormModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgMultiSelectDropDownModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
