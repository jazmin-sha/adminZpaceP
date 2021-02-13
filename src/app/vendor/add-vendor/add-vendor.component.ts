import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { VendorServiceService } from '../../services/vendor-service/vendor-service.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  'imageSrc': string;
  submitted = false;
    
  public addVendorForm: FormGroup = Object.create(null);

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private vendorService: VendorServiceService
    ) { }

  ngOnInit(): void {
   this.addVendorForm = this.formBuilder.group({
    vendor_username: ['', Validators.required],
    vendor_email: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(13)]],
    vendor_first_name: ['', Validators.required],
    vendor_last_name: ['', Validators.required],
    vendor_country: ['', Validators.required],
    vendor_address: ['', Validators.required],
    vendor_account_type: ['', Validators.required],
    vendor_phone:  ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', Validators.required],
   })
  }

  urls = [] as  any;

  onSelect(e: any){
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);  
      }
    }
  }
}


addVendor(){
  console.log('vendor added');
  this.submitted = true;
  const vendorDetail = this.addVendorForm.value;
  console.log(vendorDetail);

  if ("added" + this.addVendorForm.invalid) {
    return;
  }
  this.vendorService.addVendors(this.addVendorForm.value)
  .subscribe({
    next: () => {

    }
  })
  
}

}
