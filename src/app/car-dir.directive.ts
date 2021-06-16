import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCarDir]'
})
export class CarDirDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.background='yellow';
    el.nativeElement.style.width="400px";
    el.nativeElement.innerText="You must login to proceed further!"
   }

}
