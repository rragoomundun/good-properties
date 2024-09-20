import { createSelector } from '@ngrx/store';

import { MyOffersState } from './my-offers.state';

import { AppState } from '../../../store/app.store';

const myOffersState = (state: AppState) => state.myOffers;

export const selectMyOffersMeta = createSelector(
  myOffersState,
  (state: MyOffersState) => state.meta,
);

export const selectMyOffers = createSelector(
  myOffersState,
  (state: MyOffersState) => state.offers,
);
