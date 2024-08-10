import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: ContactFormComponent },
  { path: 'edit-contact/:id', component: ContactFormComponent },
  { path: '**', redirectTo: '/login' }
];
