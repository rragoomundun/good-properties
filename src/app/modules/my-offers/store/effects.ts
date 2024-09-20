import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, concatMap, map, catchError } from 'rxjs';

import { OfferService } from '../../../shared/services/offer/offer.service';

import * as MyOffersActions from './actions';

@Injectable()
export class MyOfferEffects {
  actions$: Actions = inject(Actions);

  constructor(private offerService: OfferService) {}

  getMyOffersMeta$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyOffersActions.getMyOffersMeta),
      concatMap(() =>
        this.offerService.getMyOffersMeta().pipe(
          map((meta) => MyOffersActions.getMyOffersMetaSuccess({ meta })),
          catchError((error) => of(MyOffersActions.getMyOffersMetaFailed())),
        ),
      ),
    ),
  );

  getMyOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyOffersActions.getMyOffers),
      concatMap((action) =>
        this.offerService.getMyOffers(action.page).pipe(
          map((offers) => MyOffersActions.getMyOffersSuccess({ offers })),
          catchError(() => of(MyOffersActions.getMyOffersFailed())),
        ),
      ),
    ),
  );
}
