import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SalesDetailsListComponent } from './sales-details-list/sales-details-list.component';
import { SalesReturnDetailComponent } from './sales-return-detail/sales-return-detail.component';

const routes: Routes = [
  {
    path:'sales_detail',
    component: MainComponent
  },
  // {
  //   path: 'sales_return',
  //   component: SalesReturnDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
