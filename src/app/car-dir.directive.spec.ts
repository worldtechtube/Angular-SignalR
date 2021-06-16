import { ElementRef } from '@angular/core';
import { CarDirDirective } from './car-dir.directive';

describe('CarDirDirective', () => {
  it('should create an instance', () => {
    let elRef: ElementRef;
    const directive = new CarDirDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
