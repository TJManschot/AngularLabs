import {Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);

  constructor(private contactService: ContactService) {
  }
  addContactForm = new FormGroup({
    name: this.name,
    age: this.age
  });
  addContact(): void {
    this.contactService.add(this.addContactForm.value);
    this.addContactForm.reset();
  }
  checkRequired(formControl: FormControl): boolean {
    return formControl.errors?.required;
  }
  checkPattern(formControl: FormControl): boolean {
    return formControl.errors?.pattern;
  }
}
