import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { PlatformService } from '../../../shared/services/platform/platform.service';
import { AuthService } from '../../../modules/auth/services/auth/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const platformService: PlatformService = inject(PlatformService);
  const authService: AuthService = inject(AuthService);

  return <Observable<boolean>>authService.authorized().pipe(
    map(() => true),
    catchError(() => {
      if (platformService.isPlatformBrowser()) {
        router.navigate(['/']);
      }

      return of(false);
    }),
  );
};
