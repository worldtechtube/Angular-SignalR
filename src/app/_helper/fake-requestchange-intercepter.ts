import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeRequesChangeIntercepter implements HttpInterceptor{
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url,method,headers,body}=request;
        const {username, password}=body;
        
        if(url=="http://localhost:4200/api/authenticate"){
            const req = request.clone({
                method: "GET"
            });
            return next.handle(req);
        }
        return next.handle(request);

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
            return throwError({error: {message}})
        }
    }    
}
export const FakeRequestChangeProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeRequesChangeIntercepter,
    multi:true
}