import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { ProductServiceService } from './../../services/product-service/product-service.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {

  submitted = false;

  public updateStockForm: FormGroup = Object.create(null);

  constructor(
    private formBuilder: FormBuilder,
    public service: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.updateStockForm = this.formBuilder.group({
      id : ['',Validators.required],
      prod_stock: ['', Validators.required],
      prod_stock_online: ['', Validators.required],
      prod_stock_manual: ['', Validators.required]
    })
  }


  updateStock(){
    this.submitted = true;
    const customerDetail = this.updateStockForm.value;
    console.log(customerDetail);
    
    // stop here if form is invalid
    if (" stock added"+this.updateStockForm.invalid) {
      return;
    }
    this.service.updateProductStock(this.updateStockForm.value)
    .subscribe({
      next: () => {

      }
    })
  }

}
