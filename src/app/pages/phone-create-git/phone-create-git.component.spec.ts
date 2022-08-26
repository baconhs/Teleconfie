import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCreateGitComponent } from './phone-create-git.component';

describe('PhoneCreateGitComponent', () => {
  let component: PhoneCreateGitComponent;
  let fixture: ComponentFixture<PhoneCreateGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneCreateGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCreateGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
