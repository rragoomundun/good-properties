import { createReducer, on } from '@ngrx/store';

import { SearchState } from './search.state';
import { ArticleState } from './article.state';

import { Status } from '../../../shared/enums/status.enum';

import * as SearchActions from './actions';

export const initialSearchState: SearchState = {
  features: null,
  meta: null,
  offers: [],
  status: Status.PENDING,
};

export const searchReducer = createReducer(
  initialSearchState,
  on(SearchActions.getFeaturesSuccess, (state, { features }) => ({
    ...state,
    features,
  })),
  on(SearchActions.getSearchMetaSuccess, (state, { meta }) => ({
    ...state,
    meta,
  })),
  on(SearchActions.searchOffers, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SearchActions.searchOffersSuccess, (state, { offers }) => ({
    ...state,
    offers,
    status: Status.SUCCESS,
  })),
);

export const initialArticlesState: ArticleState = {
  articles: [],
  status: Status.PENDING,
};

export const articlesReducer = createReducer(
  initialArticlesState,
  on(SearchActions.getArticles, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SearchActions.getArticlesSuccess, (state, { articles }) => ({
    ...state,
    articles,
    status: Status.SUCCESS,
  })),
  on(SearchActions.getArticlesFailed, (state) => ({
    ...state,
    articles: [],
    status: Status.ERROR,
  })),
);
