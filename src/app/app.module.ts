import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [    
    LoginComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:5149'], 
        disallowedRoutes: ['localhost:5149/api/users/login']
      }
    }),
    CommonModule
  ],
  providers: [
    AuthService,
    ContactService,
    AuthGuard
  ]
  
})
export class AppModule { }