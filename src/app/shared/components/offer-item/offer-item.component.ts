import { Component, input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { OfferItem } from '../../models/OfferItem.model';

import { MauritiusUtil } from '../../utils/mauritius.util';

@Component({
  selector: 'app-offer-item',
  standalone: true,
  imports: [NgbCarouselModule, TranslateModule, RouterModule],
  templateUrl: './offer-item.component.html',
  styleUrl: './offer-item.component.scss',
})
export class OfferItemComponent implements OnInit {
  offer = input<OfferItem>();
  city: string;

  ngOnInit(): void {
    this.city = MauritiusUtil.getNameFromCityId(this.offer().city_id);
  }
}
