import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploaded } from '../../models/FileUploaded.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'file';
  }

  uploadFile(file: File): Observable<FileUploaded> {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post<FileUploaded>(this.API_PREFIX, formData, {
      withCredentials: true,
    });
  }

  deleteFile(fileName: string): Observable<Object> {
    const body = { fileName };
    return this.http.delete(this.API_PREFIX, { body, withCredentials: true });
  }
}
