import { Injectable } from '@angular/core';
import { ProductData } from '../../models/product/product-data';
import { productList } from '../../models/product/product-datas';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  private ROOT_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  addVendors(vendor : any){
    return this.http.post<any>(`${this.ROOT_URL}/vendor`, vendor);
    console.log(vendor);
    
    }

}
