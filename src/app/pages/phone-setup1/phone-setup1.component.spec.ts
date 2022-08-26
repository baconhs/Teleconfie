import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetup1Component } from './phone-setup1.component';

describe('PhoneSetup1Component', () => {
  let component: PhoneSetup1Component;
  let fixture: ComponentFixture<PhoneSetup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSetup1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
