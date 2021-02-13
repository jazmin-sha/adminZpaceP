import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Vendors } from '../../models/vendor/vendors';
import { vendorList } from '../../models/vendor/vendor-datas'
@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.component.html',
  styleUrls: ['./vendor-listing.component.scss']
})
export class VendorListingComponent implements OnInit , AfterViewInit{


  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = [ 'Vendor Name', 'Store Name','Total Products', 'Gross Sales', 'Earnings', 'WithDrawal', 'action'];
  dataSource = new MatTableDataSource(vendorList);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  constructor(public dialog: MatDialog, public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
      obj.action = action;
      const dialogRef = this.dialog.open(CustomerDialogContent, {
          data: obj
      });
      console.log(obj);
      
      dialogRef.afterClosed().subscribe(result => {
          if (result.event === 'Update') {
              this.updateRowData(result.data);
          } else if (result.event === 'Delete') {
              this.deleteRowData(result.data);
          }
      });
  }
//   if (result.event === 'Add') {
//     this.addRowData(result.data);
// } else

//   // tslint:disable-next-line - Disables all
//   addRowData(row_obj: Customers): void {
//       this.dataSource.data.push({
//           id: CusomerList.length + 1,
//           customer_name: row_obj.customer_name,
//           cust_address: row_obj.cust_address,
//           email_id: row_obj.email_id,
//           phone_number: row_obj.phone_number,
//           delivery_status:row_obj.delivery_status,
//           payment_status: row_obj.payment_status
//       });
//       this.dialog.open(AddCustomerComponent);
//       this.table.renderRows();
//   }

  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: Vendors): boolean | any {
      this.dataSource.data = this.dataSource.data.filter((value: any) => {
          if (value.id === row_obj.id) {
              value.vendor_first_name = row_obj.vendor_first_name;
              value.store_name = row_obj.store_name;
              value.total_products = row_obj.total_products;
              value.gross_sales = row_obj.gross_sales;
              value.earnings = row_obj.earnings;
              value.withdrawal = row_obj.withdrawal;
          }
          return true;
      });
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: Vendors): boolean | any {
      this.dataSource.data = this.dataSource.data.filter((value: any) => {
          return value.id !== row_obj.id;
      });
  }
}


// @Component({
//   // tslint:disable-next-line: component-selector
//   selector: 'dialog-content',
//   templateUrl: 'dialog-content.html',
// })
// tslint:disable-next-line: component-class-suffix
export class CustomerDialogContent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  selectedImage: any = '';
  joiningDate: any = '';

  constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<CustomerDialogContent>,
      // @Optional() is used to prevent error if no data is passed
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Vendors) {
      this.local_data = { ...data };
      this.action = this.local_data.action;
    //   if (this.local_data.DateOfJoining !== undefined) {
    //     this.joiningDate = this.datePipe.transform(new Date(this.local_data.DateOfJoining), 'yyyy-MM-dd');
    // }
    // if (this.local_data.imagePath === undefined) {
    //     this.local_data.imagePath = 'assets/images/users/default.png';
    // }
  }

  doAction(): void {
      this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
      this.dialogRef.close({ event: 'Cancel' });
  }

//   selectFile(event: any): void {
//       if (!event.target.files[0] || event.target.files[0].length === 0) {
//           // this.msg = 'You must select an image';
//           return;
//       }
//       const mimeType = event.target.files[0].type;
//       if (mimeType.match(/image\/*/) == null) {
//           // this.msg = "Only images are supported";
//           return;
//       }
//       // tslint:disable-next-line - Disables all
//       const reader = new FileReader();
//       reader.readAsDataURL(event.target.files[0]);
//       // tslint:disable-next-line - Disables all
//       reader.onload = (_event) => {
//           // tslint:disable-next-line - Disables all
//           this.local_data.imagePath = reader.result;
//       };
//   }
}
