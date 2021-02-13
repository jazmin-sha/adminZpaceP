import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CutomerserviceService {

  private ROOT_URL = 'http://localhost:3000/';


  constructor(
    private http: HttpClient,
     private router: Router
  ) { }

    addCustomer(customer : any){
      return this.http.post<any>(`${this.ROOT_URL}/register`, customer);
      console.log(customer);
      
      }

}
