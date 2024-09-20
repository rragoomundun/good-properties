import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Features } from '../../models/Features.model';
import { NewOffer } from '../../models/NewOffer.model';
import { Offer } from '../../models/Offer.model';
import { MyOffersMeta } from '../../models/MyOffersMeta.model';
import { OfferItem } from '../../models/OfferItem.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'offer';
  }

  getFeatures(): Observable<Features> {
    return this.http.get<Features>(`${this.API_PREFIX}/features`);
  }

  getOffer(offerId: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.API_PREFIX}/${offerId}`);
  }

  getMyOffersMeta(): Observable<MyOffersMeta> {
    return this.http.get<MyOffersMeta>(`${this.API_PREFIX}/my-offers/meta`, {
      withCredentials: true,
    });
  }

  getMyOffers(page: number): Observable<OfferItem[]> {
    return this.http.get<OfferItem[]>(`${this.API_PREFIX}/my-offers`, {
      withCredentials: true,
      params: { page },
    });
  }

  createOffer(
    images: string[],
    typeOfGood: string,
    transactionType: string,
    squareMeters: number,
    nbRooms: number,
    nbBedrooms: number,
    price: number,
    description: string,
    cityId: number,
    features: number[],
  ): Observable<NewOffer> {
    const body = {
      images,
      type_of_good: typeOfGood,
      transaction_type: transactionType,
      square_meters: squareMeters,
      nb_rooms: nbRooms,
      nb_bedrooms: nbBedrooms,
      price,
      description,
      city_id: cityId,
      features,
    };

    return this.http.post<NewOffer>(this.API_PREFIX, body, {
      withCredentials: true,
    });
  }
}
