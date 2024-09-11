import { createAction, props } from '@ngrx/store';

import { Features } from '../../../shared/models/Features.model';

export const getFeatures = createAction('[New Offer Page] Get Features');
export const getFeaturesSuccess = createAction(
  '[New Offer Page] Get Features Success',
  props<{ features: Features }>(),
);
export const getFeaturesFailed = createAction(
  '[New Offer Page] Get Features Failed',
);

export const createOffer = createAction(
  '[New Offer Page] Create Offer',
  props<{
    images: string[];
    typeOfGood: string;
    transactionType: string;
    squareMeters: number;
    nbRooms: number;
    nbBedrooms: number;
    price: number;
    description: string;
    cityId: number;
    features: number[];
  }>(),
);
export const createOfferSuccess = createAction(
  '[New Offer Page] Create Offer Success',
  props<{ id: number }>(),
);
export const createOfferFailed = createAction(
  '[New Offer Page] Create Offer Failed',
  props<{ errors: any }>(),
);
