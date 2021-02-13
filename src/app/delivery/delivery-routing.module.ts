import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const deliveyRoutes: Routes = [
  {
    path: 'delivery_detail',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(deliveyRoutes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
