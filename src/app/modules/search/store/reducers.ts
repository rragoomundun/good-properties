import { createReducer, on } from '@ngrx/store';

import { SearchState } from './search.state';

import * as SearchActions from './actions';

export const initialSearchState: SearchState = {
  features: null,
  meta: null,
  offers: [],
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
  on(SearchActions.searchOffersSuccess, (state, { offers }) => ({
    ...state,
    offers,
  })),
);
