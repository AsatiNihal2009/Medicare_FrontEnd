import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptorProviders implements HttpInterceptor{
    constructor(private token:TokenStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest =req;
        const token =this.token.getUser();
        
        if (token!=null) {
            authRequest=req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,'Bearer '+token["token"]) });
        }
        return next.handle(authRequest);
    }
}

export const authInterceptorProviders =[
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorProviders,multi:true}
];