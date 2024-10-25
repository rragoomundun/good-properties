import { createSelector } from '@ngrx/store';

import { OfferState } from './offer.state';

import { AppState } from '../../../store/app.store';

const offerState = (state: AppState) => state.offer;

export const selectOffer = createSelector(
  offerState,
  (state: OfferState) => state.offer,
);

export const selectOfferStatus = createSelector(
  offerState,
  (state: OfferState) => state.status,
);

export const selectOfferErrors = createSelector(
  offerState,
  (state: OfferState) => state.errors,
);
