import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from '../../models/Article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'article';
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.API_PREFIX}/all`);
  }

  getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.API_PREFIX}/${articleId}`);
  }
}
