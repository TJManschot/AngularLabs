import { Injectable } from '@angular/core';
import {Contact} from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {name: 'Sam Smith', age: 12},
    {name: 'Frank Muscles', age: 34},
    {name: 'Eddy Valentino', age: 56}
  ];
  getContacts(): Contact[] {
    return this.contacts;
  }
  add(contact: Contact): void {
    this.contacts.push(contact);
  }
}
