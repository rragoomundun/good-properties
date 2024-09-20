import { Component, input } from '@angular/core';

import { OfferItemComponent } from '../offer-item/offer-item.component';

import { OfferItem } from '../../models/OfferItem.model';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [OfferItemComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  offers = input<OfferItem[]>();
}
