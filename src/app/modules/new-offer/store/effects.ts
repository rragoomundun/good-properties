import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, tap } from 'rxjs';

import { OfferService } from '../../../shared/services/offer/offer.service';

import * as NewOfferActions from './actions';

@Injectable()
export class NewOfferEffects {
  actions$: Actions = inject(Actions);

  constructor(
    private router: Router,
    private offerService: OfferService,
  ) {}

  getFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewOfferActions.getFeatures),
      concatMap(() =>
        this.offerService.getFeatures().pipe(
          map((features) => NewOfferActions.getFeaturesSuccess({ features })),
          catchError(() => of(NewOfferActions.getFeaturesFailed())),
        ),
      ),
    ),
  );

  createOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewOfferActions.createOffer),
      concatMap((action) =>
        this.offerService
          .createOffer(
            action.images,
            action.typeOfGood,
            action.transactionType,
            action.squareMeters,
            action.nbRooms,
            action.nbBedrooms,
            action.price,
            action.description,
            action.cityId,
            action.features,
          )
          .pipe(
            map((response) =>
              NewOfferActions.createOfferSuccess({ id: response.id }),
            ),
            tap((action) => this.router.navigate(['/offer', action.id])),
            catchError((error) =>
              of(NewOfferActions.createOfferFailed({ errors: error.error })),
            ),
          ),
      ),
    ),
  );
}
