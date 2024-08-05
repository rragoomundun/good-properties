import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, of, tap, mergeMap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '../services/auth/auth.service';

import * as AuthActions from './actions';
import * as UserActions from '../../../shared/store/user/actions';

@Injectable()
export class AuthEffects {
  actions$: Actions = inject(Actions);

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService,
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap((action) =>
        this.authService
          .register(action.email, action.password, action.repeatedPassword)
          .pipe(
            map(() => AuthActions.registerSuccess()),
            catchError((error) =>
              of(AuthActions.registerFailed({ errors: error.error })),
            ),
          ),
      ),
    ),
  );

  registerConfirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerConfirm),
      exhaustMap((action) =>
        this.authService.registerConfirm(action.confirmationToken).pipe(
          map(() => AuthActions.registerConfirmSuccess()),
          tap(() => setTimeout(() => this.router.navigate(['/']), 3000)),
          catchError((error) => of(AuthActions.registerConfirmFailed())),
        ),
      ),
    ),
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          mergeMap(() => [
            AuthActions.loginSuccess(),
            UserActions.getCurrentUser(),
          ]),
          tap(() => this.router.navigate(['/'])),
          catchError((error) =>
            of(AuthActions.loginFailed({ errors: error.error })),
          ),
        ),
      ),
    ),
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => UserActions.clearCurrentUser()),
          tap(() => this.cookieService.delete('token', '/')),
        ),
      ),
    ),
  );
}
