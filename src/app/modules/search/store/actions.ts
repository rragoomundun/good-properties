import { createAction, props } from '@ngrx/store';

import { Features } from '../../../shared/models/Features.model';
import { SearchMeta } from '../../../shared/models/SearchMeta.model';
import { OfferItem } from '../../../shared/models/OfferItem.model';
import { Article } from '../../../shared/models/Article.model';

export const getFeatures = createAction('[Search Form Component] Get Features');
export const getFeaturesSuccess = createAction(
  '[Search Form Component] Get Features Success',
  props<{ features: Features }>(),
);
export const getFeaturesFailed = createAction(
  '[Search Form Component] Get Features Failed',
);

export const getSearchMeta = createAction(
  '[Search Results Component] Get Search Meta',
  props<{
    transactionType: string;
    typeOfGood: string;
    cityIds: string;
    minPrice: number;
    maxPrice: number;
    minSquareMeters: number;
    maxSquareMeters: number;
    nbRooms: number;
    nbBedrooms: number;
    features: string;
  }>(),
);
export const getSearchMetaSuccess = createAction(
  '[Search Results Component] Get Search Meta Success',
  props<{ meta: SearchMeta }>(),
);
export const getSearchMetaFailed = createAction(
  '[Search Results Component] Get Search Meta Failed',
);

export const searchOffers = createAction(
  '[Search Results Component] Search Offers',
  props<{
    transactionType: string;
    typeOfGood: string;
    cityIds: string;
    minPrice: number;
    maxPrice: number;
    minSquareMeters: number;
    maxSquareMeters: number;
    nbRooms: number;
    nbBedrooms: number;
    features: string;
    page: number;
  }>(),
);
export const searchOffersSuccess = createAction(
  '[Search Results Component] Search Offers Success',
  props<{ offers: OfferItem[] }>(),
);
export const searchOffersFailed = createAction(
  '[Search Results Component] Search Offers Failed',
);

export const getArticles = createAction('[Search Home Component] Get Articles');
export const getArticlesSuccess = createAction(
  '[Search Home Component] Get Articles Success',
  props<{ articles: Article[] }>(),
);
export const getArticlesFailed = createAction(
  '[Search Form Component] Get Articles Failed',
);
