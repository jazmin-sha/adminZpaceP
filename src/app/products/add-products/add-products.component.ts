import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { ProductServiceService } from '../../services/product-service/product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  'imageSrc': string;
  submitted = false;
    
  public addProductForm: FormGroup = Object.create(null);

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private pdtService: ProductServiceService
    ) { }

  ngOnInit(): void {
   this.addProductForm = this.formBuilder.group({
    prod_image:['',Validators.required],
    prod_name: ['', Validators.required],
    prod_seller: ['', Validators.required],
    prod_variant: ['', Validators.required],
    prod_category: ['', Validators.required],
    prod_isReturnable: ['', Validators.required],
    prod_price_selling: ['', Validators.required],
    prod_discount: ['', Validators.required],
    prod_price_offer: ['', Validators.required],
    prod_price_total: ['', Validators.required],
    prod_discount_added: ['', Validators.required],
    prod_expiry_date: ['', Validators.required]
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

   
get f(){
  return this.addProductForm.controls;
}
  
addProduct(){
  console.log('product added');
  this.submitted = true;
  const productDetail = this.addProductForm.value;
  console.log(productDetail);

  if ("added" + this.addProductForm.invalid) {
    return;
  }
  this.pdtService.addProducts(this.addProductForm.value)
  .subscribe({
    next: () => {

    }
  })
  
}

}
