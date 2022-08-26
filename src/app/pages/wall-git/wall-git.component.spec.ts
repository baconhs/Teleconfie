import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallGitComponent } from './wall-git.component';

describe('WallGitComponent', () => {
  let component: WallGitComponent;
  let fixture: ComponentFixture<WallGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
