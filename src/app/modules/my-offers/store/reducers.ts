import { createReducer, on } from '@ngrx/store';

import { MyOffersState } from './my-offers.state';

import { Status } from '../../../shared/enums/status.enum';

import * as MyOfferActions from './actions';

export const initialMyOffersState: MyOffersState = {
  meta: null,
  offers: [],
  status: Status.PENDING,
};

export const myOffersReducer = createReducer(
  initialMyOffersState,
  on(MyOfferActions.getMyOffersMetaSuccess, (state, { meta }) => ({
    ...state,
    meta,
  })),
  on(MyOfferActions.getMyOffers, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(MyOfferActions.getMyOffersSuccess, (state, { offers }) => ({
    ...state,
    offers,
    status: Status.SUCCESS,
  })),
);
