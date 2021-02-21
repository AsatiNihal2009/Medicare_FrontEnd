import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL='http://192.168.225.123:8080/medicare/user'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient:HttpClient) { }

  searchAndFilterProduct(...form: any[]):Observable<any>{
    let httpParams = new HttpParams()
    .set('product',form[0].productName)
    .set('age',form[0].age)
    .set('state',form[0].state)
    .set('category',form[0].category)
    .set('quantity',<string>form[0].quantity);
    return this.httpClient.post(API_URL,httpParams);
  }
}
