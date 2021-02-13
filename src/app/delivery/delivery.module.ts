import { FormModule } from './../forms/forms.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryBoyManagementComponent } from './delivery-boy-management/delivery-boy-management.component';
import { AddDeliveryPersonComponent } from './add-delivery-person/add-delivery-person.component';
import { DeliveryBoyTrackComponent } from './delivery-boy-track/delivery-boy-track.component';
import { MainComponent } from './main/main.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DeliveryBoyManagementComponent,
     AddDeliveryPersonComponent,
      DeliveryBoyTrackComponent, 
      MainComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    DemoMaterialModule,
    MatCardModule,
    FormModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgMultiSelectDropDownModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DeliveryModule { }
