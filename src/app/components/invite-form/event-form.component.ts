import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact/contact.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-invite-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css', '../contact-form/contact-form.component.css']
})
export class EventFormComponent implements OnInit {
  addEventForm = new FormGroup({
    event: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    invites: new FormControl('', Validators.nullValidator)
  });
  contacts: Contact[] = [];
  invites: Contact[] = [];
  constructor(private contactService: ContactService) {
  }
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
  addEvent(): void {

    console.log(this.addEventForm.value);
    this.addEventForm.reset();
  }
}
