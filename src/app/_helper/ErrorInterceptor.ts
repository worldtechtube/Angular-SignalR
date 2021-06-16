import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs';  
import { catchError } from 'rxjs/operators';  
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()  
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private router: Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err=>{
            if(err.error.status==401){
                this.router.navigate(['/failedlogin']);
            }
            const error = err.error.message || err.statusText;
        return throwError(error);
        }))        
    }    
}

export const FakeErrorInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi:true
}