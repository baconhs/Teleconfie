import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLinkComponent } from './desktop-link.component';

describe('DesktopLinkComponent', () => {
  let component: DesktopLinkComponent;
  let fixture: ComponentFixture<DesktopLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
