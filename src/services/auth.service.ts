import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080';
  private jwtHelper = new JwtHelperService();
  token;
  isAuth = new BehaviorSubject(null);
  isAuth$ = this.isAuth.asObservable();

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post<{ message: string, errorCode: number }>(`${this.apiUrl}/accounts/signup`, user);
  }

  logIn(user: any) {
    return this.http.post<{ message: string, token: string, email: string, errorCode: number }>(`${this.apiUrl}/accounts/login`, user);
  }

  setToken(token: string): void {
    this.token = token;
    this.isAuth.next(token);
    sessionStorage.setItem('aadplay-uauth-token', token);
}

getToken(): string {
    return this.token;
}

isUserLoggedIn() {
    const token = sessionStorage.getItem('aadplay-uauth-token');
    if (token) {
        const isExpired = this.jwtHelper.isTokenExpired(token);
        if (!isExpired) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

logout() {
    this.token = null;
    this.isAuth.next(null);
    sessionStorage.removeItem('aadplay-uauth-token');
}
}