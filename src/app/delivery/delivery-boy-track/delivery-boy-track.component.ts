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
  selector: 'app-delivery-boy-track',
  templateUrl: './delivery-boy-track.component.html',
  styleUrls: ['./delivery-boy-track.component.scss']
})
export class DeliveryBoyTrackComponent implements OnInit {


  submitted = false;


  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  dataSource = new MatTableDataSource(CusomerList);
  displayedColumns: string[] = ['#', 'customer_name', 'email_id', 'phone_number', 'cust_address', 'delivery_status', 'payment_status'];


  public deliveryTrackForm: FormGroup = Object.create(null);
  //  public deliveryTrackForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private router: Router,

    public service: CutomerserviceService
  ) { }

  ngOnInit(): void {
    this.deliveryTrackForm = this.formBuilder.group({
      delivery_boy_name: ['', Validators.required],
      order_id: ['', Validators.required],
      })  
  }


  letsTrack(){
    this.submitted = true;
    const customerDetail = this.deliveryTrackForm.value;
    console.log(customerDetail);
    
    // stop here if form is invalid
    if ("added"+this.deliveryTrackForm.invalid) {
      return;
    }
    this.service.addCustomer(this.deliveryTrackForm.value)
    .subscribe({
      next: () => {

      }
    })
  }
}
