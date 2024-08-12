import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/User.model';
import { Contact } from '../../models/Contact.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'user';
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.API_PREFIX, { withCredentials: true });
  }

  getCurrentUserContact(): Observable<Contact> {
    return this.http.get<Contact>(`${this.API_PREFIX}/contact`, {
      withCredentials: true,
    });
  }
}
