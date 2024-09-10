import { createSelector } from '@ngrx/store';

import { NewOfferFeaturesState } from './new-offer-features.state';

import { AppState } from '../../../store/app.store';

const newOfferFeaturesState = (state: AppState) => state.newOfferFeatures;

export const selectNewOfferFeatures = createSelector(
  newOfferFeaturesState,
  (state: NewOfferFeaturesState) => state.features,
);

export const selectNewOfferErrors = createSelector(
  newOfferFeaturesState,
  (state: NewOfferFeaturesState) => state.errors,
);
