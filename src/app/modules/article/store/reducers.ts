import { createReducer, on } from '@ngrx/store';

import { ArticleState } from './article.state';

import { Status } from '../../../shared/enums/status.enum';

import * as ArticleActions from './actions';

export const initialArticleState: ArticleState = {
  article: null,
  status: Status.PENDING,
};

export const articleReducer = createReducer(
  initialArticleState,
  on(ArticleActions.getArticle, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(ArticleActions.getArticleSuccess, (state, { article }) => ({
    ...state,
    article,
    status: Status.SUCCESS,
  })),
  on(ArticleActions.getArticleFailed, (state) => ({
    ...state,
    status: Status.ERROR,
  })),
);
