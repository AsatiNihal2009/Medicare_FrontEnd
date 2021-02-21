import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL='http://192.168.225.123:8080/medicare/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }
  
  addProduct(product:any):Observable<any>{      
    return this.httpClient.post(API_URL,product);
  }

  fetchAllProduct():Observable<any>{
    return this.httpClient.get(API_URL);
  }

  fetchProductByName(productName:String):Observable<any>{
    return this,this.httpClient.get(API_URL+`/${productName}`);
  }
  
  editProduct(product:any):Observable<any> {
    return this.httpClient.put(API_URL,product);
  }

  toggleProduct(toggle:string,name:string):Observable<any>{
    let httpParams = new HttpParams()
      .set('toggle',toggle)
      .set('name',name);
    return this.httpClient.patch(API_URL,httpParams);
  }

}
