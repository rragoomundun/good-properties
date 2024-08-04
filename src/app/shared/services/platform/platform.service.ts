import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isPlatformServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
