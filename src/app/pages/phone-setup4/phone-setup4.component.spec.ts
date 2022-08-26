import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetup4Component } from './phone-setup4.component';

describe('PhoneSetup4Component', () => {
  let component: PhoneSetup4Component;
  let fixture: ComponentFixture<PhoneSetup4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSetup4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
