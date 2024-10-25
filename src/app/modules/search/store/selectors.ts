import { createSelector } from '@ngrx/store';

import { SearchState } from './search.state';
import { ArticleState } from './article.state';

import { AppState } from '../../../store/app.store';

const searchState = (state: AppState) => state.search;

export const selectSearchFeatures = createSelector(
  searchState,
  (state: SearchState) => state.features,
);

export const selectSearchMeta = createSelector(
  searchState,
  (state: SearchState) => state.meta,
);

export const selectSearchOffers = createSelector(
  searchState,
  (state: SearchState) => state.offers,
);

export const selectSearchStatus = createSelector(
  searchState,
  (state: SearchState) => state.status,
);

const articleState = (state: AppState) => state.articles;

export const selectHomepageArticles = createSelector(
  articleState,
  (state: ArticleState) => state.articles,
);
