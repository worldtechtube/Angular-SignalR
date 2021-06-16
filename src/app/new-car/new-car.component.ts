import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  newCar: any;
  constructor(private fb: FormBuilder) {
    this.newCar = this.fb.group({
      id: [''],
      name: [''],
      features: this.fb.group({
        isAutomatic:[''],
        engine: [''],
        milage: ['']
      }),
      model: this.fb.group({
        modelNo: [''],
        manufactureYear: ['']
      })
    })
   }

  ngOnInit(): void {
  }

}
