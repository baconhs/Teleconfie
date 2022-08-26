import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallUsersComponent } from './wall-users.component';

describe('WallUsersComponent', () => {
  let component: WallUsersComponent;
  let fixture: ComponentFixture<WallUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
