import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL='http://192.168.225.123:8080/medicare/cart'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) { }

  addProductToCart(productName:string,username:string):Observable<any>{
    let httpParams = new HttpParams()
      .set('productName',productName)
      .set('username',username);
    return this.httpClient.post(API_URL,httpParams);
  }

  getProductsInCart(id:any):Observable<any>{
    return this.httpClient.get(API_URL+`/${id}`);
  }

  removeProductFromCart(productName:string):Observable<any>{
    let httpParams= new HttpParams().set('productName',productName);
    return this.httpClient.delete(API_URL,{params:httpParams});
  }
}
