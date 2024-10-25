import { createAction, props } from '@ngrx/store';

import { Article } from '../../../shared/models/Article.model';

export const getArticle = createAction(
  '[Article Page] Get Article',
  props<{ articleId: number }>(),
);
export const getArticleSuccess = createAction(
  '[Article Page] Get Article Success',
  props<{ article: Article }>(),
);
export const getArticleFailed = createAction(
  '[Article Page] Get Article Failed',
);
