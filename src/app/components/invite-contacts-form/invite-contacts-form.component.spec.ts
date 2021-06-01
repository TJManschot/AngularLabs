import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteContactsFormComponent } from './invite-contacts-form.component';

describe('InviteContactsFormComponent', () => {
  let component: InviteContactsFormComponent;
  let fixture: ComponentFixture<InviteContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteContactsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
