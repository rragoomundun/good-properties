import { createAction, props } from '@ngrx/store';

import { Offer } from '../../../shared/models/Offer.model';

export const getOffer = createAction(
  '[Offer Page] Get Offer',
  props<{ id: number }>(),
);
export const getOfferSuccess = createAction(
  '[Offer Page] Get Offer Success',
  props<{ offer: Offer }>(),
);
export const getOfferFailed = createAction(
  '[Offer Page] Get Offer Failed',
  props<{ errors: any }>(),
);
