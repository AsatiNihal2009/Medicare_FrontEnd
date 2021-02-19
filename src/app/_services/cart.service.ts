import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Roles } from "../_enum/roles.enum";

const API_URL='http://192.168.225.123:8080/medicare/cart'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) { }

  addProductToCart(productName:string,username:string):Observable<any>{
    let httpParams = new HttpParams()
      .set('productName',productName)
      .set('username',username);
    return this.httpClient.post(API_URL + Roles.user,{httpParams},httpOptions);
  }

  getProductsInCart(id:any):Observable<any>{
    return this.httpClient.get(API_URL+`/${id}` + Roles.user,httpOptions);
  }

  removeProductFromCart(productName:string):Observable<any>{
    let httpParams= new HttpParams().set('productName',productName);
    return this.httpClient.delete(API_URL+Roles.user,{params:httpParams});
  }

}
