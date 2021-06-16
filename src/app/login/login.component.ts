import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../_services/data.service';
import { DialogService } from '../_services/dialog.service';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  loginform: any;

  constructor(private router: Router, private ds: DataService, private http: HttpClient,private dialogService: DialogService) { 
  }

  ngOnInit(): void {

    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  SubmitLoginDetails(loginData){   
    
    var user = this.http.post<any>("http://localhost:4200/api/login",loginData.value)
    .subscribe(data=>{
      console.log(data);
      this.ds.sendData('login');
      this.router.navigate(['/home']);
    }, error=>{
      console.log(error);
    })
  }
}
