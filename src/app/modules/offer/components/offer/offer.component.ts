import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { Offer } from '../../../../shared/models/Offer.model';

import { Status } from '../../../../shared/enums/status.enum';

import { AppState } from '../../../../store/app.store';

import { selectOffer, selectOfferStatus } from '../../store/selectors';

import * as OfferActions from '../../store/actions';

import { MauritiusUtil } from '../../../../shared/utils/mauritius.util';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [TranslateModule, NgbCarouselModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  offer$: Observable<Offer>;
  status$: Observable<Status>;

  offer: Offer;
  status: Status;
  title: string;
  city: string;
  description: string;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
  ) {
    const offerId = this.activatedRoute.snapshot.paramMap.get('offerId');

    this.store.dispatch(
      OfferActions.getOffer({
        id: <number>(<unknown>offerId),
      }),
    );

    this.offer$ = this.store.select(selectOffer);
    this.status$ = this.store.select(selectOfferStatus);

    this.offer$.subscribe((offer) => {
      this.offer = offer;

      if (this.offer) {
        this.title = '';
        this.city = MauritiusUtil.getNameFromCityId(this.offer.city_id);

        switch (this.offer.type_of_good) {
          case 'house':
            this.title += this.translateService.instant('HOUSE');
            break;
          case 'apartment':
            this.title += this.translateService.instant('APARTMENT');
            break;
          case 'room':
            this.title += this.translateService.instant('ROOM');
            break;
        }

        this.title += ' - ';

        switch (this.offer.transaction_type) {
          case 'to-sell':
            this.title += this.translateService.instant('TO_SELL');
            break;
          case 'to-rent':
            this.title += this.translateService.instant('TO_RENT');
            break;
        }

        this.description = this.offer.description
          .split('\n')
          .map((paragraph) => `<p>${paragraph.trim()}</p>`)
          .join('\n');

        // Set page title
        let pageTitle = `${this.title};`;

        pageTitle += ` ${this.offer.square_meters} ${this.translateService.instant('SQUARE_METERS')} `;
        pageTitle += `${this.translateService.instant('IN')} ${this.city}`;
        pageTitle += ` - ${this.translateService.instant('TITLE')}`;

        this.titleService.setTitle(pageTitle);
      }
    });
    this.status$.subscribe((status) => (this.status = status));
  }
}
