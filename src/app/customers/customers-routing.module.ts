import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../products/main/main.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';


const routes: Routes = [
  {
    path: 'reg_cutomer',
    component: CustomerMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
