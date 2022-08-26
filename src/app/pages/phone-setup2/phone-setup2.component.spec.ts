import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSetup2Component } from './phone-setup2.component';

describe('PhoneSetup2Component', () => {
  let component: PhoneSetup2Component;
  let fixture: ComponentFixture<PhoneSetup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSetup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSetup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
