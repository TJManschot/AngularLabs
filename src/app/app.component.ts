import { Component } from '@angular/core';
import {Contact} from './models/contact';
import {ContactService} from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  constructor(private contactService: ContactService) {}
  getContacts(): Contact[] {
    return this.contactService.getContacts();
  }
  addContact(contact: Contact): void {
    this.contactService.add(contact);
  }
}
