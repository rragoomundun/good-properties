import { createSelector } from '@ngrx/store';

import { SearchState } from './search.state';

import { AppState } from '../../../store/app.store';

const searchState = (state: AppState) => state.search;

export const selectSearchFeatures = createSelector(
  searchState,
  (state: SearchState) => state.features,
);
