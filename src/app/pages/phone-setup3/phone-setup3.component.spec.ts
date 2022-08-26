import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetup3Component } from './phone-setup3.component';

describe('PhoneSetup3Component', () => {
  let component: PhoneSetup3Component;
  let fixture: ComponentFixture<PhoneSetup3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSetup3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
