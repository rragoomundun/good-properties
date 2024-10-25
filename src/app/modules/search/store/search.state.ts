import { Status } from '../../../shared/enums/status.enum';
import { Features } from '../../../shared/models/Features.model';
import { OfferItem } from '../../../shared/models/OfferItem.model';
import { SearchMeta } from '../../../shared/models/SearchMeta.model';

export interface SearchState {
  features: Features;
  meta: SearchMeta;
  offers: OfferItem[];
  status: Status;
}
