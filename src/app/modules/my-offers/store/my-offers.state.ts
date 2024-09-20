import { MyOffersMeta } from '../../../shared/models/MyOffersMeta.model';
import { OfferItem } from '../../../shared/models/OfferItem.model';

export interface MyOffersState {
  meta: MyOffersMeta;
  offers: OfferItem[];
}
