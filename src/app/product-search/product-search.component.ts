import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Age } from '../_enum/age.enum';
import { Category } from '../_enum/category.enum';
import { State } from '../_enum/state.enum';
import { CartService } from '../_services/cart.service';
import { SearchService } from '../_services/search.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  constructor( 
    private router:Router,
    private formBuilder: FormBuilder,
    private productService: SearchService,
    private cartService:CartService,
    private token:TokenStorageService
  ) { }
  ngOnInit(): void {
    this.productDetails=this.formBuilder.group({
      category:[''],
      state:[''],
      age:[''],
      productName:[''],
      quantity:['']
    });
  }  
  productDetails: FormGroup;
  category: any = Category;
  age: any = Age;
  state: any = State;
  quantity:number;
  product:any[];
  items:any;
  values(type: any) {
    return Object.keys(type).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
  keyDown(event: { keyCode: number; },product: any) {
    if (event.keyCode === 13) {
      this.productService.searchAndFilterProduct(product.value).subscribe(
        (data) => {
          this.product=data;
          data.forEach(element => {
            this.items=element;
          });
          console.log(JSON.stringify(this.items));
        }
      )      
    }
  }
  addProductToCart(itemName:string){
    this.cartService.addProductToCart(itemName,this.token.getUser()["username"]).subscribe(
      (data) => {
        console.log(data);
      })
    window.alert("Product Added To cart");
    this.router.navigateByUrl('/cart');
  }  
}
