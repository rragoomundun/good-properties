import { createReducer, on } from '@ngrx/store';

import { SearchState } from './search.state';

import * as SearchActions from './actions';

export const initialSearchState: SearchState = {
  features: null,
};

export const searchReducer = createReducer(
  initialSearchState,
  on(SearchActions.getFeaturesSuccess, (state, { features }) => ({
    ...state,
    features,
  })),
);
