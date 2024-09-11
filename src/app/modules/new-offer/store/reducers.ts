import { createReducer, on } from '@ngrx/store';

import { NewOfferFeaturesState } from './new-offer-features.state';

import * as NewOfferActions from './actions';

export const initialNewOfferFeaturesState: NewOfferFeaturesState = {
  features: null,
  errors: null,
};

export const newOfferFeaturesReducer = createReducer(
  initialNewOfferFeaturesState,
  on(NewOfferActions.getFeaturesSuccess, (state, { features }) => ({
    ...state,
    features,
  })),
  on(NewOfferActions.createOfferFailed, (state, { errors }) => ({
    ...state,
    errors,
  })),
);
