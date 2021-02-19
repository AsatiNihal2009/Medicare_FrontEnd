import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API="http://192.168.225.123:8080/medicare/auth/";

const httpOption={
  headers:new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string):Observable<any>{
    return this.http.post(AUTH_API+'signin',{
      username,
      password
    },httpOption);
  }

  register(username:string,password:string):Observable<any>{
    return this.http.post(AUTH_API+'signup',{
      username,
      password
    },httpOption);
  }
}
