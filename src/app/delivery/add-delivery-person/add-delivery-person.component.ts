import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CusomerList } from '../../models/customer/customer-datas'
import { CutomerserviceService } from '../../services/customer-service/cutomerservice.service'

@Component({
  selector: 'app-add-delivery-person',
  templateUrl: './add-delivery-person.component.html',
  styleUrls: ['./add-delivery-person.component.scss']
})
export class AddDeliveryPersonComponent implements OnInit {


  submitted = false;


  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  dataSource = new MatTableDataSource(CusomerList);
  displayedColumns: string[] = ['#', 'customer_name', 'email_id', 'phone_number', 'cust_address', 'delivery_status', 'payment_status'];


  public addDeliveryPersonForm: FormGroup = Object.create(null);
  //  public addCustomerForm: FormGroup;

  constructor(
    public dialog: MatDialog,
      public datePipe: DatePipe,
      private formBuilder: FormBuilder,
      private router: Router,

      public service: CutomerserviceService
  ) { }

  ngOnInit(): void {
    this.addDeliveryPersonForm = this.formBuilder.group({
      delivery_boy_name: ['', Validators.required],
      delivery_boy_email: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(13)]],
      delivery_boy_phone: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      delivery_boy_address: ['', Validators.required],
      })  
  }

 
  addDeliveryPerson(){
    this.submitted = true;
    const customerDetail = this.addDeliveryPersonForm.value;
    console.log(customerDetail);
    
    // stop here if form is invalid
    if ("added"+this.addDeliveryPersonForm.invalid) {
      return;
    }
    this.service.addCustomer(this.addDeliveryPersonForm.value)
    .subscribe({
      next: () => {

      }
    })
  }
}
