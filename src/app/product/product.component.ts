import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Age } from '../_enum/age.enum';
import { Category } from '../_enum/category.enum';
import { State } from '../_enum/state.enum';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails: FormGroup;
  category: any = Category;
  age: any = Age;
  state: any = State;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  values(type: any) {
    return Object.keys(type).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }

  ngOnInit(): void {
    this.productDetails = this.formBuilder.group({
      category: [''],
      age: [''],
      state: [''],
      productName: ['', [Validators.minLength(2)]],
      quantity: ['', [Validators.minLength(2)]],
      itemTotal: ['', [Validators.minLength(2)]]
    });
  }
  onSubmit = (productDetails: any) => {
    this.productService.addProduct(productDetails.value).subscribe(
      msg => {
        console.log(msg);
      });
    this.productDetails.reset();
  }



}
