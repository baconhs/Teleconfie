import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetupU4Component } from './phone-setup-u4.component';

describe('PhoneSetupU4Component', () => {
  let component: PhoneSetupU4Component;
  let fixture: ComponentFixture<PhoneSetupU4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSetupU4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetupU4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
