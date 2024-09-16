import { createReducer, on } from '@ngrx/store';

import { OfferState } from './offer.state';

import * as OfferActions from './actions';

export const initialOfferState: OfferState = {
  offer: null,
  errors: null,
};

export const offerReducer = createReducer(
  initialOfferState,
  on(OfferActions.getOfferSuccess, (state, { offer }) => ({
    ...state,
    offer,
    errors: null,
  })),
  on(OfferActions.getOfferFailed, (state, { errors }) => ({
    ...state,
    errors,
  })),
);
