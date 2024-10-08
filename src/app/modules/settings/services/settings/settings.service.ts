import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'user/setting';
  }

  updateEmail(email: string): Observable<Object> {
    const body = { email };

    return this.http.put(`${this.API_PREFIX}/email`, body, {
      withCredentials: true,
    });
  }

  updatePassword(
    password: string,
    repeatedPassword: string,
  ): Observable<Object> {
    const body = { password, repeatedPassword };

    return this.http.put(`${this.API_PREFIX}/password`, body, {
      withCredentials: true,
    });
  }

  updateContact(
    email: string,
    telephone: string,
    whatsapp: string,
  ): Observable<Object> {
    const body = { email, telephone, whatsapp };

    return this.http.put(`${this.API_PREFIX}/contact`, body, {
      withCredentials: true,
    });
  }

  deleteAccount(): Observable<Object> {
    return this.http.delete(`${this.API_PREFIX}/delete`, {
      withCredentials: true,
    });
  }
}
