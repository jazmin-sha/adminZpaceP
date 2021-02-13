import { ProductServiceService } from './../../services/product-service/product-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CusomerList } from '../../models/customer/customer-datas'

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  submitted = false;

  public addStockForm: FormGroup = Object.create(null);

  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private router: Router,

    public service: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.addStockForm = this.formBuilder.group({
      prod_category : ['',Validators.required],
      prod_batch_no: ['', Validators.required],
      prod_name: ['', Validators.required],
      prod_expiry_date: ['', Validators.required],
      prod_quantity: ['', Validators.required]
    })
  }

  createStock(){
    this.submitted = true;
    const customerDetail = this.addStockForm.value;
    console.log(customerDetail);
    
    // stop here if form is invalid
    if (" stock added"+this.addStockForm.invalid) {
      return;
    }
    this.service.addProductStock(this.addStockForm.value)
    .subscribe({
      next: () => {

      }
    })
  }

}
