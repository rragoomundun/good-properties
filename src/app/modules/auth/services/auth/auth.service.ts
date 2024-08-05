import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly API_PREFIX;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'auth';
  }

  register(
    email: string,
    password: string,
    repeatedPassword: string,
  ): Observable<Object> {
    const params = {
      email,
      password,
      repeatedPassword,
    };

    return this.http.post(`${this.API_PREFIX}/register`, params);
  }

  registerConfirm(confirmationToken: string): Observable<Object> {
    return this.http.post(
      `${this.API_PREFIX}/register/confirm/${confirmationToken}`,
      {},
      { withCredentials: true },
    );
  }

  login(email: string, password: string): Observable<Object> {
    const params = {
      email,
      password,
    };

    return this.http.post(`${this.API_PREFIX}/login`, params);
  }

  logout(): Observable<Object> {
    return this.http.get(`${this.API_PREFIX}/logout`, {
      withCredentials: true,
    });
  }

  passwordForgotten(email: string): Observable<Object> {
    const params = { email };
    return this.http.post(`${this.API_PREFIX}/password/forgot`, params);
  }
}
