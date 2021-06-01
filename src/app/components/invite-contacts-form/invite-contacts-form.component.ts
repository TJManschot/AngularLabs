import {Component, Input} from '@angular/core';
import {Contact} from '../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-invite-contacts-form',
  templateUrl: './invite-contacts-form.component.html',
  styleUrls: ['./invite-contacts-form.component.css']
})
export class InviteContactsFormComponent {
  @Input() contact: Contact = {name: '', age: 0};
  private invited = false;
  addInvitationForm = new FormGroup({
    checked: new FormControl('', Validators.nullValidator)
  });
  toggleInvitation(): void {
    this.invited = !this.invited;
  }
}
