import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHistoryComponent } from './wall-history.component';

describe('WallHistoryComponent', () => {
  let component: WallHistoryComponent;
  let fixture: ComponentFixture<WallHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
