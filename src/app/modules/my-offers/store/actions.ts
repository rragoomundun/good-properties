import { createAction, props } from '@ngrx/store';

import { MyOffersMeta } from '../../../shared/models/MyOffersMeta.model';
import { OfferItem } from '../../../shared/models/OfferItem.model';

export const getMyOffersMeta = createAction(
  '[My Offers Page] Get My Offers Meta',
);
export const getMyOffersMetaSuccess = createAction(
  '[My Offers Page] Get My Offers Meta Success',
  props<{ meta: MyOffersMeta }>(),
);
export const getMyOffersMetaFailed = createAction(
  '[My Offers Page] Get My Offers Meta Failed',
);

export const getMyOffers = createAction(
  '[My Offers Page] Get My Offers',
  props<{ page: number }>(),
);
export const getMyOffersSuccess = createAction(
  '[My Offers Page] Get My Offers Success',
  props<{ offers: OfferItem[] }>(),
);
export const getMyOffersFailed = createAction(
  '[My Offers Page] Get My Offers Failed',
);
