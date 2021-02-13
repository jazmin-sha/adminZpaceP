import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { productList } from '../../models/product/product-datas'
import { ProductData } from '../../models/product/product-data'


@Component({
  selector: 'app-all-inventry-list',
  templateUrl: './all-inventry-list.component.html',
  styleUrls: ['./all-inventry-list.component.scss']
})
export class AllInventryListComponent implements OnInit, AfterViewInit  {


  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'prod_name', 'prod_price_selling', 'prod_price_offer', 'stock for manual sale', 'stock for online sale', 'action'];
  dataSource = new MatTableDataSource(productList);
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
//     const dialogRef = this.dialog.open(EmployeeDialogContent, {
//         data: obj
//     });
//     dialogRef.afterClosed().subscribe(result => {
//         // if (result.event === 'Add') {
//         //     this.addRowData(result.data);
//         // }
//           if (result.event === 'Update') {
//             this.updateRowData(result.data);
//         } else if (result.event === 'Delete') {
//             this.deleteRowData(result.data);
//         }
//     });
// }

// // tslint:disable-next-line - Disables all
// addRowData(row_obj: Employee): void {
//     this.dataSource.data.push({
//         id: employees.length + 1,
//         Name: row_obj.Name,
//         Position: row_obj.Position,
//         Email: row_obj.Email,
//         Mobile: row_obj.Mobile,

//         DateOfJoining: new Date(),
//         Salary: row_obj.Salary,
//         Projects: row_obj.Projects,
//         imagePath: row_obj.imagePath
//     });
//     this.dialog.open(AddComponent);
//     this.table.renderRows();
// }

// tslint:disable-next-line - Disables all
updateRowData(row_obj: ProductData): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
        if (value.Id === row_obj.id) {
            value.prod_name = row_obj.prod_name;
            value.prod_image = row_obj.prod_image;
            value.prod_seller = row_obj.prod_seller;
            value.prod_variant = row_obj.prod_variant;
            value.prod_category = row_obj.prod_category;
            value.prod_isReturnable = row_obj.prod_isReturnable;
            value.prod_price_selling = row_obj.prod_price_selling;
            value.prod_discount = row_obj.prod_discount;
            value.prod_price_offer = row_obj.prod_price_offer;
            value.prod_price_total = row_obj.prod_price_total;
            value.prod_discount_added = row_obj.prod_discount_added;
            value.prod_expiry_date = row_obj.prod_expiry_date;
        }
        return true;
    });
}

// tslint:disable-next-line - Disables all
deleteRowData(row_obj: ProductData): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
        return value.id !== row_obj.id;
    });
}
}


@Component({
// tslint:disable-next-line: component-selector
selector: 'dialog-content',
templateUrl: 'dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class EmployeeDialogContent {
action: string;
// tslint:disable-next-line - Disables all
local_data: any;
selectedImage: any = '';
joiningDate: any = '';

constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<EmployeeDialogContent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductData) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    if (this.local_data.DateOfJoining !== undefined) {
        this.joiningDate = this.datePipe.transform(new Date(this.local_data.DateOfJoining), 'yyyy-MM-dd');
    }
    if (this.local_data.imagePath === undefined) {
        this.local_data.imagePath = 'assets/images/users/default.png';
    }
}

doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
}
closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
}

selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
        // this.msg = 'You must select an image';
        return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.msg = "Only images are supported";
        return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = (_event) => {
        // tslint:disable-next-line - Disables all
        this.local_data.imagePath = reader.result;
    };
}

}
