import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetupU3Component } from './phone-setup-u3.component';

describe('PhoneSetupU3Component', () => {
  let component: PhoneSetupU3Component;
  let fixture: ComponentFixture<PhoneSetupU3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSetupU3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetupU3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
