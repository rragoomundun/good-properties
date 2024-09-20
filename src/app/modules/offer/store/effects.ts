import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, concatMap, map, catchError } from 'rxjs';

import { OfferService } from '../../../shared/services/offer/offer.service';

import * as OfferActions from './actions';

@Injectable()
export class OfferEffects {
  actions$: Actions = inject(Actions);

  constructor(private offerService: OfferService) {}

  getOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferActions.getOffer),
      concatMap((action) =>
        this.offerService.getOffer(action.id).pipe(
          map((offer) => OfferActions.getOfferSuccess({ offer })),
          catchError((error) =>
            of(OfferActions.getOfferFailed({ errors: error.error })),
          ),
        ),
      ),
    ),
  );
}
