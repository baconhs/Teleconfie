import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopContComponent } from './desktop-cont.component';

describe('DesktopContComponent', () => {
  let component: DesktopContComponent;
  let fixture: ComponentFixture<DesktopContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
