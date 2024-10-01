import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';

import { OfferService } from '../../../shared/services/offer/offer.service';

import * as SearchActions from './actions';

@Injectable()
export class SearchEffects {
  actions$: Actions = inject(Actions);

  constructor(private offerService: OfferService) {}

  getFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getFeatures),
      concatMap(() =>
        this.offerService.getFeatures().pipe(
          map((features) => SearchActions.getFeaturesSuccess({ features })),
          catchError(() => of(SearchActions.getFeaturesFailed())),
        ),
      ),
    ),
  );
}
