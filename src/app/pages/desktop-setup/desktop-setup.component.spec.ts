import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSetupComponent } from './desktop-setup.component';

describe('DesktopSetupComponent', () => {
  let component: DesktopSetupComponent;
  let fixture: ComponentFixture<DesktopSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
