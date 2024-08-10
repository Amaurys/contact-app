import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  contact: Contact = { name: '', phoneNumber: '' };

  constructor(private contactService: ContactService, private router: Router) {}

  saveContact(): void {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact).subscribe(
        () => this.router.navigate(['/contacts']),
        error => console.error('Failed to update contact', error)
      );
    } else {
      this.contactService.addContact(this.contact).subscribe(
        () => this.router.navigate(['/contacts']),
        error => console.error('Failed to add contact', error)
      );
    }
  }
}