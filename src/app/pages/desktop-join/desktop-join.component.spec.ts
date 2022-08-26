import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopJoinComponent } from './desktop-join.component';

describe('DesktopJoinComponent', () => {
  let component: DesktopJoinComponent;
  let fixture: ComponentFixture<DesktopJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
