import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  values = [1,2];

  increment(){
    this.values.push(Math.random());
    //this.values = [Math.random()].concat(this.values); //-- Returns new aray
  }
  constructor() {
    console.log('Parent component - Constructor');
  }
  ngDoCheck(): void {
    console.log('parent component - ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent component - ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('parent component - destroy');
  }

  ngOnInit(): void {
    console.log('parent component - ngOnInit');
  }

}
