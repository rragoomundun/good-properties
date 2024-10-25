import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { Status } from '../../../../shared/enums/status.enum';

import { SearchMeta } from '../../../../shared/models/SearchMeta.model';
import { OfferItem } from '../../../../shared/models/OfferItem.model';

import { OfferComponent } from '../../../../shared/components/offer/offer.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { AppState } from '../../../../store/app.store';

import {
  selectSearchMeta,
  selectSearchOffers,
  selectSearchStatus,
} from '../../store/selectors';

import * as SearchActions from '../../store/actions';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [TranslateModule, OfferComponent, PaginationComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  meta$: Observable<SearchMeta>;
  offers$: Observable<OfferItem[]>;
  status$: Observable<Status>;

  meta: SearchMeta;
  offers: OfferItem[];
  status: Status;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.root.queryParams.subscribe((queryParams: Params) => {
      this.store.dispatch(
        SearchActions.getSearchMeta({
          transactionType: queryParams['transaction_type'],
          typeOfGood: queryParams['type_of_good'],
          cityIds: queryParams['city_ids'],
          minPrice: queryParams['min_price'],
          maxPrice: queryParams['max_price'],
          minSquareMeters: queryParams['min_square_meters'],
          maxSquareMeters: queryParams['max_square_meters'],
          nbRooms: queryParams['nb_rooms'],
          nbBedrooms: queryParams['nb_bedrooms'],
          features: queryParams['features'],
        }),
      );
      this.store.dispatch(
        SearchActions.searchOffers({
          transactionType: queryParams['transaction_type'],
          typeOfGood: queryParams['type_of_good'],
          cityIds: queryParams['city_ids'],
          minPrice: queryParams['min_price'],
          maxPrice: queryParams['max_price'],
          minSquareMeters: queryParams['min_square_meters'],
          maxSquareMeters: queryParams['max_square_meters'],
          nbRooms: queryParams['nb_rooms'],
          nbBedrooms: queryParams['nb_bedrooms'],
          features: queryParams['features'],
          page: queryParams['page'],
        }),
      );
    });

    this.meta$ = this.store.select(selectSearchMeta);
    this.offers$ = this.store.select(selectSearchOffers);
    this.status$ = this.store.select(selectSearchStatus);

    this.meta$.subscribe((meta) => (this.meta = meta));
    this.offers$.subscribe((offers) => (this.offers = offers));
    this.status$.subscribe((status) => (this.status = status));
  }
}
