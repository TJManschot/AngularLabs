import {Component, OnInit} from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {
  }
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
