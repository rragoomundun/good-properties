import { createReducer, on } from '@ngrx/store';

import { SearchState } from './search.state';

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
