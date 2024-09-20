import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { filter, Observable, Subscription } from 'rxjs';

import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { OfferComponent } from '../../../../shared/components/offer/offer.component';

import { PlatformService } from '../../../../shared/services/platform/platform.service';

import { MyOffersMeta } from '../../../../shared/models/MyOffersMeta.model';
import { OfferItem } from '../../../../shared/models/OfferItem.model';

import { AppState } from '../../../../store/app.store';

import { selectMyOffers, selectMyOffersMeta } from '../../store/selectors';

import * as MyOffersActions from '../../store/actions';

@Component({
  selector: 'app-my-offers',
  standalone: true,
  imports: [TranslateModule, PaginationComponent, OfferComponent],
  templateUrl: './my-offers.component.html',
  styleUrl: './my-offers.component.scss',
})
export class MyOffersComponent implements OnDestroy {
  meta$: Observable<MyOffersMeta>;
  offers$: Observable<OfferItem[]>;

  meta: MyOffersMeta;
  offers: OfferItem[];

  routerEventsSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService,
  ) {
    this.store.dispatch(MyOffersActions.getMyOffersMeta());

    this.meta$ = this.store.select(selectMyOffersMeta);
    this.offers$ = this.store.select(selectMyOffers);

    this.meta$.subscribe((meta) => (this.meta = meta));
    this.offers$.subscribe((offers) => (this.offers = offers));

    this.getMyOffers();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let regex = new RegExp('/my-offers.[^/]*$');

        if (regex.test(this.router.url)) {
          this.getMyOffers();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  getMyOffers(): void {
    let page = this.activatedRoute.snapshot.queryParams['page'];

    if (!page) {
      page = 1;
    }

    this.store.dispatch(MyOffersActions.getMyOffers({ page }));

    if (this.platformService.isPlatformBrowser()) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    }
  }
}
