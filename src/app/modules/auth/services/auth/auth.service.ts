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
    repeatedPassword: string
  ): Observable<any> {
    const params = {
      email,
      password,
      repeatedPassword,
    };

    return this.http.post(`${this.API_PREFIX}/register`, params);
  }
}
