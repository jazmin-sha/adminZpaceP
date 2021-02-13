import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../inventory/main/main.component';
import { AllInventryListComponent } from './all-inventry-list/all-inventry-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { OffersComponent } from './offers/offers.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

const inventoryRoutes: Routes = [
  {
    path: 'all_inventory',
    component: MainComponent
  },
  // {
  //   path: 'create_stock',
  //   component:CreateStockComponent
  // },
  // {
  //   path: 'offers',
  //   component: OffersComponent
  // },
  // {
  //   path: 'update_stock',
  //   component: UpdateStockComponent
  // }
];
@NgModule({
  imports: [RouterModule.forChild(inventoryRoutes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
