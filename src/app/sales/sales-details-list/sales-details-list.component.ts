import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CusomerList } from '../../models/customer/customer-datas'
import { CustomerData } from '../../models/customer/customer-data';
import { productList } from '../../models/product/product-datas';
import { ProductData } from '../../models/product/product-data';

@Component({
  selector: 'app-sales-details-list',
  templateUrl: './sales-details-list.component.html',
  styleUrls: ['./sales-details-list.component.scss']
})
export class SalesDetailsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'Customer Name', 'Product Category', 'Product Name', 'Date','Selling Price', 'Dicount','Total Amount','action'];
  dataSource = new MatTableDataSource(CusomerList && productList);
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

// openDialog(action: string, obj: any): void {
//     obj.action = action;
//     const dialogRef = this.dialog.open(CustomerDialogContent, {
//         data: obj
//     });
//     console.log(obj);
    
//     dialogRef.afterClosed().subscribe(result => {
//         if (result.event === 'Update') {
//             this.updateRowData(result.data);
//         } else if (result.event === 'Delete') {
//             this.deleteRowData(result.data);
//         }
//     });
// }
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

// // tslint:disable-next-line - Disables all
// updateRowData(row_obj: CustomerData): boolean | any {
//     this.dataSource.data = this.dataSource.data.filter((value: any) => {
//         if (value.id === row_obj.id) {
//             value.customer_name = row_obj.customer_name;
//             value.cust_address = row_obj.cust_address;
//             value.email_id = row_obj.email_id;
//             value.phone_number = row_obj.phone_number;
//             value.delivery_status = row_obj.delivery_status;
//             value.payment_status = row_obj.payment_status;
//         }
//         return true;
//     });
// }

// // tslint:disable-next-line - Disables all
// deleteRowData(row_obj: CustomerData): boolean | any {
//     this.dataSource.data = this.dataSource.data.filter((value: any) => {
//         return value.id !== row_obj.id;
//     });
// }
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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CustomerData ,public datas:ProductData ) {
    this.local_data = { ...data , ...datas};
    this.action = this.local_data.action;
  //   if (this.local_data.DateOfJoining !== undefined) {
  //     this.joiningDate = this.datePipe.transform(new Date(this.local_data.DateOfJoining), 'yyyy-MM-dd');
  // }
  // if (this.local_data.imagePath === undefined) {
  //     this.local_data.imagePath = 'assets/images/users/default.png';
  // }
}

doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data, datas: this.local_data });
}
closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
}

}
