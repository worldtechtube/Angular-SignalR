import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Address } from '../Model/address';
import { User } from '../Model/user';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  address = new Address("Country_1", "State_1", "City_1", "111001");
  userModel = new User("email","11111", this.address);
  regObject:any;


  registrationForm: any;

  constructor(private fb: FormBuilder,private dialogService: DialogService) {
    this.registrationForm = this.fb.group({
      email: [''],
      password: [''],
      address: this.fb.group({
        country: [''],
        state: [''],
        city: [''],
        pin:['']
      })
    });

    //this.registrationForm.setValue(this.userModel);
  }
   

  ngOnInit(): void {
    this.regObject = {
      email: 'email@xyz.com',
      address:{
        country:'country_0001',
        state: 'state_001',
        city: 'city_001',
        pin: '67676767'
      }
    }
    this.registrationForm.patchValue(this.regObject); // setValue and patchValue
  }
  SubmitRegisterDetails(registerData){
    this.dialogService.sendDialog();
    console.log(registerData);
  }
}
