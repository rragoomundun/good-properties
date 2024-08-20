import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(this.API_PREFIX, formData, { withCredentials: true });
  }

  deleteFile(fileName: string): Observable<Object> {
    const body = { fileName };
    return this.http.delete(this.API_PREFIX, { body, withCredentials: true });
  }
}
