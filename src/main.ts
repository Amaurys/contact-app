import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './app/guards/auth.guard';
import { ContactService } from './app/services/contact.service';
import { AuthService } from './app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app/app.routes';

export function tokenGetter() {
  return localStorage.getItem('token');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      FormsModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          allowedDomains: ['localhost:5149'],
          disallowedRoutes: ['localhost:5149/api/users/login']
        }
      })
    ),
    AuthService,
    ContactService,
    AuthGuard
  ]
}).catch(err => console.error(err));