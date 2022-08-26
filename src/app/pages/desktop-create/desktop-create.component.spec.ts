import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCreateComponent } from './desktop-create.component';

describe('DesktopCreateComponent', () => {
  let component: DesktopCreateComponent;
  let fixture: ComponentFixture<DesktopCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
