import { Injectable } from '@angular/core';
import { ProductData } from '../../models/product/product-data';
import { productList } from '../../models/product/product-datas';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private ROOT_URL = 'http://localhost:3000/';

  public product = productList;
  public getProduct(): ProductData[] {
      return this.product;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  addProducts(product : any){
    return this.http.post<any>(`${this.ROOT_URL}/product`, product);
    console.log(product);
    
    }

   addProductStock(stock : any){
      return this.http.post<any>(`${this.ROOT_URL}/stock`, stock);
      console.log(stock);
      
      }

   updateProductStock(upstock : any){
        return this.http.post<any>(`${this.ROOT_URL}/stock`, upstock);
        console.log(upstock);
      }
}
