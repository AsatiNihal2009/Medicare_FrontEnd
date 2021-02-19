import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Age } from '../_enum/age.enum';
import { Category } from '../_enum/category.enum';
import { State } from '../_enum/state.enum';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productDetails: FormGroup;
  category: any = Category;
  age: any = Age;
  state: any = State;
  productNames: any[];
  value:String;
  product:any;
  status: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService
  ) { 
    this.productNames=[];
  }
  
  ngOnInit(): void {
    this.productService.fetchAllProduct().subscribe(
      (data)  => {this.productNames=data},
    );
    this.productDetails=this.formBuilder.group({
      age: [''],
      state: [''],
      productName: ['', [Validators.minLength(2)]],
      quantity: ['', [Validators.minLength(2)]],
      itemTotal: ['', [Validators.minLength(2)]]
    })
  }

  fetchProductDetails(name:any){
    this.productService.fetchProductByName(name).subscribe(
      (data)  => {
        this.product=data;
        JSON.stringify(this.product);
      },
    );
  }
  
  values(type: any) {
    return Object.keys(type).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
  clickEvent(){
    this.status=!this.status;
    this.productService.toggleProduct(this.status.toString(),this.product.itemName).subscribe(
      (data)  => {
        console.log(data);
      },
    );
  }  
  onSubmit = (productDetails: any) => {    
    this.productService.editProduct(productDetails.value).subscribe(
      (data) => {
        console.log(data);
      }
    )
    window.alert("Product Updated");
    this.productDetails.reset();
  }


}
