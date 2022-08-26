import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetupU2Component } from './phone-setup-u2.component';

describe('PhoneSetupU2Component', () => {
  let component: PhoneSetupU2Component;
  let fixture: ComponentFixture<PhoneSetupU2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSetupU2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetupU2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
