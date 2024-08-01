import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, of, tap } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

import * as AuthActions from './actions';

@Injectable()
export class AuthEffects {
  actions$: Actions = inject(Actions);

  constructor(
    private router: Router,
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
}
