import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorLoadingComponent } from './sensor-loading.component';

describe('SensorLoadingComponent', () => {
  let component: SensorLoadingComponent;
  let fixture: ComponentFixture<SensorLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
