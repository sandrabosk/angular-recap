import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNestedComponent } from './first-nested.component';

describe('FirstNestedComponent', () => {
  let component: FirstNestedComponent;
  let fixture: ComponentFixture<FirstNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
