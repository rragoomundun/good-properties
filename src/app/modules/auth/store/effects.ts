import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  exhaustMap,
  of,
  tap,
  mergeMap,
  concatMap,
} from 'rxjs';
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
          concatMap(() => [
            AuthActions.registerConfirmSuccess(),
            UserActions.getCurrentUser(),
          ]),
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
          tap(() => {
            if (
              this.router.url === '/new-offer' ||
              this.router.url === '/my-offers' ||
              this.router.url.startsWith('/settings') ||
              /\/offer\/.*\/edit/g.test(this.router.url)
            ) {
              this.router.navigate(['/']);
            }

            this.cookieService.delete('token', '/');
          }),
        ),
      ),
    ),
  );

  passwordForgotten$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.passwordForgotten),
      exhaustMap((action) =>
        this.authService.passwordForgotten(action.email).pipe(
          map(() => AuthActions.passwordForgottenSuccess()),
          catchError((error) =>
            of(AuthActions.passwordForgottenFailed({ errors: error.error })),
          ),
        ),
      ),
    ),
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPassword),
      exhaustMap((action) =>
        this.authService
          .resetPasword(
            action.password,
            action.repeatedPassword,
            action.resetPasswordToken,
          )
          .pipe(
            concatMap(() => [
              AuthActions.resetPasswordSuccess(),
              UserActions.getCurrentUser(),
            ]),
            tap(() => setTimeout(() => this.router.navigate(['/']), 3000)),
            catchError((error) =>
              of(AuthActions.resetPasswordFailed({ errors: error.error })),
            ),
          ),
      ),
    ),
  );
}
