import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopConnectingComponent } from './desktop-connecting.component';

describe('DesktopConnectingComponent', () => {
  let component: DesktopConnectingComponent;
  let fixture: ComponentFixture<DesktopConnectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopConnectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopConnectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
