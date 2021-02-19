import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Roles } from "../_enum/roles.enum";

const API_URL='http://192.168.225.123:8080/medicare/user'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient:HttpClient) { }

  searchAndFilterProduct(productName:string,state:string,age:string,category:string,quantity:number):Observable<any>{
    let httpParams = new HttpParams()
    .set('product',productName)
    .set('age',age)
    .set('state',state)
    .set('category',category)
    .set('quantity',<string><any>quantity);

    return this.httpClient.post(API_URL + Roles.user,{httpParams},httpOptions);
  }
}
