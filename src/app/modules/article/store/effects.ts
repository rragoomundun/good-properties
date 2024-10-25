import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';

import { ArticleService } from '../../../shared/services/article/article.service';

import * as ArticleActions from './actions';

@Injectable()
export class ArticleEffects {
  actions$: Actions = inject(Actions);

  constructor(private articleService: ArticleService) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticle),
      concatMap((action) =>
        this.articleService.getArticle(action.articleId).pipe(
          map((article) => ArticleActions.getArticleSuccess({ article })),
          catchError(() => of(ArticleActions.getArticleFailed())),
        ),
      ),
    ),
  );
}
