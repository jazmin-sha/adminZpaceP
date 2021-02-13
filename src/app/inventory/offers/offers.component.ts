import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { ProductServiceService } from './../../services/product-service/product-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  submitted = false;

  public offerForm: FormGroup = Object.create(null);

  constructor(
    private formBuilder: FormBuilder,
    public service: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.offerForm = this.formBuilder.group({
      offer_name: ['', Validators.required],
      prod_price_selling : ['',Validators.required],
      prod_price_offer: ['', Validators.required],
      prod_description: ['', Validators.required],
      prod_stock_manual: ['', Validators.required]
    })
  }


  addOffer(){
    this.submitted = true;
    const customerDetail = this.offerForm.value;
    console.log(customerDetail);
    
    // stop here if form is invalid
    if (" stock added"+this.offerForm.invalid) {
      return;
    }
    this.service.updateProductStock(this.offerForm.value)
    .subscribe({
      next: () => {

      }
    })
  }

}
