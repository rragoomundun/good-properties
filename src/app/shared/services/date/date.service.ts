import { Injectable } from '@angular/core';

import { DateTime } from 'luxon';

import { TranslationService } from '../translation/translation.service';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  readonly dt: DateTime;
  readonly lang: string;

  constructor(private translationService: TranslationService) {
    this.lang = this.translationService.language;
    this.dt = DateTime.local({ locale: this.lang });
  }
}
