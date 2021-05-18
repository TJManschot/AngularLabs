import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Contact} from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  firstName = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern('^.+@.+\.[a-z]$')]);

  addContactForm = new FormGroup({
    firstName: this.firstName,
    surname: this.surname,
    email: this.email
  });

  contacts: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];

  addContact(): void {
    this.contacts.push(this.addContactForm.value);
    this.addContactForm.reset();
  }
  checkRequired(formControl: FormControl): boolean {
    return formControl.errors?.required;
  }
  checkPattern(formControl: FormControl): boolean {
    return formControl.errors?.pattern;
  }
}

