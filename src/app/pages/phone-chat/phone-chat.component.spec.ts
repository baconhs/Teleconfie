import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChatComponent } from './phone-chat.component';

describe('PhoneChatComponent', () => {
  let component: PhoneChatComponent;
  let fixture: ComponentFixture<PhoneChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
