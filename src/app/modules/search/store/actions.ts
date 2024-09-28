import { createAction, props } from '@ngrx/store';

import { Features } from '../../../shared/models/Features.model';

export const getFeatures = createAction('[Search Form Component] Get Features');
export const getFeaturesSuccess = createAction(
  '[Search Form Component] Get Features Success',
  props<{ features: Features }>(),
);
export const getFeaturesFailed = createAction(
  '[Search Form Component] Get Features Failed',
);
