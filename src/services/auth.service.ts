import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post<{ message: string, errorCode: number }>(`${this.apiUrl}/accounts/signup`, user);
  }

  logIn(user: any) {
    return this.http.post<{ message: string, token: string, email: string, errorCode: number }>(`${this.apiUrl}/accounts/login`, user);
  }

  logOut() {

  }
}