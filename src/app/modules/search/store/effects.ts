import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';

import { OfferService } from '../../../shared/services/offer/offer.service';
import { ArticleService } from '../../../shared/services/article/article.service';

import * as SearchActions from './actions';

@Injectable()
export class SearchEffects {
  actions$: Actions = inject(Actions);

  constructor(
    private offerService: OfferService,
    private articleService: ArticleService,
  ) {}

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

  getSearchMeta$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getSearchMeta),
      concatMap((action) =>
        this.offerService
          .getSearchMeta(
            action.transactionType,
            action.typeOfGood,
            action.cityIds,
            action.minPrice,
            action.maxPrice,
            action.minSquareMeters,
            action.maxSquareMeters,
            action.nbRooms,
            action.nbBedrooms,
            action.features,
          )
          .pipe(
            map((meta) => SearchActions.getSearchMetaSuccess({ meta })),
            catchError((error) => of(SearchActions.getSearchMetaFailed())),
          ),
      ),
    ),
  );

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchOffers),
      concatMap((action) =>
        this.offerService
          .search(
            action.transactionType,
            action.typeOfGood,
            action.cityIds,
            action.minPrice,
            action.maxPrice,
            action.minSquareMeters,
            action.maxSquareMeters,
            action.nbRooms,
            action.nbBedrooms,
            action.features,
            action.page,
          )
          .pipe(
            map((offers) => SearchActions.searchOffersSuccess({ offers })),
            catchError((error) => of(SearchActions.searchOffersFailed())),
          ),
      ),
    ),
  );

  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getArticles),
      concatMap(() =>
        this.articleService.getAllArticles().pipe(
          map((articles) => SearchActions.getArticlesSuccess({ articles })),
          catchError(() => of(SearchActions.getArticlesFailed())),
        ),
      ),
    ),
  );
}
