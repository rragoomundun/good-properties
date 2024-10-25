import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store/app.store';

import { selectArticle, selectArticleStatus } from '../../store/selectors';

import { Article } from '../../../../shared/models/Article.model';

import { Status } from '../../../../shared/enums/status.enum';

import * as ArticleActions from '../../store/actions';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article$: Observable<Article>;
  status$: Observable<Status>;

  article: Article;
  status: Status;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
  ) {
    const { articleId } = this.activatedRoute.snapshot.params;

    this.store.dispatch(ArticleActions.getArticle({ articleId }));

    this.article$ = this.store.select(selectArticle);
    this.status$ = this.store.select(selectArticleStatus);

    this.article$.subscribe((article) => {
      this.article = article;

      if (this.article) {
        let pageTitle = `${this.article.title} - ${this.translateService.instant('TITLE')}`;

        this.titleService.setTitle(pageTitle);
      }
    });
    this.status$.subscribe((status) => (this.status = status));
  }
}
