import { createReducer, on } from '@ngrx/store';

import { MyOffersState } from './my-offers.state';

import * as MyOfferActions from './actions';

export const initialMyOffersState: MyOffersState = {
  meta: null,
  offers: [],
};

export const myOffersReducer = createReducer(
  initialMyOffersState,
  on(MyOfferActions.getMyOffersMetaSuccess, (state, { meta }) => ({
    ...state,
    meta,
  })),
  on(MyOfferActions.getMyOffersSuccess, (state, { offers }) => ({
    ...state,
    offers,
  })),
);
