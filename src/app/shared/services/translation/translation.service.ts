import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  defaultLanguage = 'en';
  language: string;

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs([this.defaultLanguage]);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);

    this.language = this.defaultLanguage;
  }

  changeLang(lang: string) {
    this.language = lang;
    this.translateService.use(lang);
  }

  instant(key: string) {
    return this.translateService.instant(key);
  }
}
