import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdermainComponent } from './ordermain/ordermain.component';

const routes: Routes = [
  {
    path:'all_orders',
    component: OrdermainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
