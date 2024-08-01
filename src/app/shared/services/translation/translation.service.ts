import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  defaultLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs([this.defaultLanguage]);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }
}
