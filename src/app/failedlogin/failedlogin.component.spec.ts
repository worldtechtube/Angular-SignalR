import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedloginComponent } from './failedlogin.component';

describe('FailedloginComponent', () => {
  let component: FailedloginComponent;
  let fixture: ComponentFixture<FailedloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
