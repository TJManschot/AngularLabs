import {Component, Output, EventEmitter } from '@angular/core';
import {Contact} from '../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent{
  @Output() add = new EventEmitter<Contact>();

  firstName = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern('^.+@.+\.[a-z]+$')]);

  addContactForm = new FormGroup({
    firstName: this.firstName,
    surname: this.surname,
    email: this.email
  });
  addContact(): void {
    this.add.emit(this.addContactForm.value);
    this.addContactForm.reset();
  }
  checkRequired(formControl: FormControl): boolean {
    return formControl.errors?.required;
  }
  checkPattern(formControl: FormControl): boolean {
    return formControl.errors?.pattern;
  }
}
