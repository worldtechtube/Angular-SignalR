import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() values;

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
    console.log('Child component - constructor');
   }
  ngAfterContentInit(): void {
    console.log('child component - ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('child component - ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('child component - ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('child component - ngAfterViewChecked')
  }
  ngDoCheck(): void {
    //this.cd.markForCheck();
    //this.cd.detectChanges();
    console.log('child component - ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.cd.detectChanges();
    this.cd.reattach();
    console.log('child component - ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('Child component - destroy')
  }

  ngOnInit(): void {
    console.log('child component - ngOnInit');
  }
  

}
