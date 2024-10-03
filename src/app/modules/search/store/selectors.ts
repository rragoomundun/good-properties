import { createSelector } from '@ngrx/store';

import { SearchState } from './search.state';

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
