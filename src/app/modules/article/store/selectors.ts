import { createSelector } from '@ngrx/store';

import { ArticleState } from './article.state';

import { AppState } from '../../../store/app.store';

const articleState = (state: AppState) => state.article;

export const selectArticle = createSelector(
  articleState,
  (state: ArticleState) => state.article,
);

export const selectArticleStatus = createSelector(
  articleState,
  (state: ArticleState) => state.status,
);
