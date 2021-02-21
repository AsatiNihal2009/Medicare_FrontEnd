import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private token:TokenStorageService,
    private router:Router
  ) { }

  cart:any;
  
  ngOnInit(): void {
    this.cartService.getProductsInCart(this.token.getUser()["id"]).subscribe(
      (data) =>{
        this.cart=data;
        console.log(this.cart);
      }
    )
  }

  proceedToCheckOut(){
    this.router.navigateByUrl('/checkout');
  }

}
