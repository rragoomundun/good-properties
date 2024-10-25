import { Status } from '../../../shared/enums/status.enum';
import { Offer } from '../../../shared/models/Offer.model';

export interface OfferState {
  offer: Offer;
  status: Status;
  errors: any;
}
