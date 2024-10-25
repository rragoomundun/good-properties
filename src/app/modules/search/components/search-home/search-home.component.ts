import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Article } from '../../../../shared/models/Article.model';

import { AppState } from '../../../../store/app.store';

import { selectHomepageArticles } from '../../store/selectors';

import * as SearchActions from '../../store/actions';

@Component({
  selector: 'app-search-home',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './search-home.component.html',
  styleUrl: './search-home.component.scss',
})
export class SearchHomeComponent {
  articles$: Observable<Article[]>;

  articles: Article[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(SearchActions.getArticles());

    this.articles$ = this.store.select(selectHomepageArticles);

    this.articles$.subscribe((articles) => (this.articles = articles));
  }
}
