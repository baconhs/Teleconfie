import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallSetupComponent } from './wall-setup.component';

describe('WallSetupComponent', () => {
  let component: WallSetupComponent;
  let fixture: ComponentFixture<WallSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
