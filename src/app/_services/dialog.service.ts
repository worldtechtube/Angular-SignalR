import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DialogService{
    private dialogSubject = new Subject<any>();

    sendDialog(){
        this.dialogSubject.next(1);        
    }

    getDialog(): Observable<any>{
        return this.dialogSubject.asObservable();
    }
}