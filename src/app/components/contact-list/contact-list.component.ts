import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      data => this.contacts = data,
      error => console.error('Failed to fetch contacts', error)
    );
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      () => this.contacts = this.contacts.filter(contact => contact.id !== id),
      error => console.error('Failed to delete contact', error)
    );
  }
}