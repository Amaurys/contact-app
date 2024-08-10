import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private apiUrl = 'https://localhost:5149/api/users';
  
    constructor(private http: HttpClient, private router: Router) {}
  
    login(credentials: { username: string, password: string }) {
      return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
        .pipe(
          tap((response: { token: string; }) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/contacts']);
          })
        );
    }
  
    logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  
    isAuthenticated(): boolean {
      return !!localStorage.getItem('token');
    }
  }