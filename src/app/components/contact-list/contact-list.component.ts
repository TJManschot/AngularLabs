import {Component, Input } from '@angular/core';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  @Input() contacts: Contact[] = [];
}
