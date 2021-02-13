import { Component, OnInit } from '@angular/core';
import { ProductData } from '../../models/product/product-data';
import { ProductServiceService } from '../../services/product-service/product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList: ProductData[] = [];
  selectedCategory = 'All';

  constructor(private productService: ProductServiceService) {
    this.productList = this.productService.getProduct();
   }

  ngOnInit(): void {
  }

}
