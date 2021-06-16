import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url,method,headers,body}=request;
        const {username, password}=body;
        
        return error('user not found');
        // ignore below codes
        // if(url=="http://localhost:4200/api/login"){
        //     const req = request.clone({
        //         url: "http://localhost:4200/api/authenticate"
        //     });
        //     return next.handle(req);
        // }
        // return next.handle(request);

        // if(username=='admin' && password=='1'){
        //     var admin={isAdmin: true, token: 'token000001'};
        //     return ok(admin);
        // }
        // else {
        //     return error('user not found');
        // }

        function ok(body?){
            return of(new HttpResponse({status:200,body}))
        }
    
        function error(message){
            return throwError({error: {message, status: 401}})
        }
    }    
}
export const FakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi:true
}