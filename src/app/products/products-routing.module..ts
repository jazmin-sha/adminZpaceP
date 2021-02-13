import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

 const productsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product_list',
        component: MainComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
