import { createReducer, on } from '@ngrx/store';

import { OfferState } from './offer.state';

import { Status } from '../../../shared/enums/status.enum';

import * as OfferActions from './actions';

export const initialOfferState: OfferState = {
  offer: null,
  status: Status.PENDING,
  errors: null,
};

export const offerReducer = createReducer(
  initialOfferState,
  on(OfferActions.getOffer, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(OfferActions.getOfferSuccess, (state, { offer }) => ({
    ...state,
    offer,
    status: Status.SUCCESS,
    errors: null,
  })),
  on(OfferActions.getOfferFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);
