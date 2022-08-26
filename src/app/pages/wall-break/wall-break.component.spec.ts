import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallBreakComponent } from './wall-break.component';

describe('WallBreakComponent', () => {
  let component: WallBreakComponent;
  let fixture: ComponentFixture<WallBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallBreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
