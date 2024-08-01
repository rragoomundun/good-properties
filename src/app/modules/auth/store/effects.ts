import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, of } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

import * as AuthActions from './actions';

@Injectable()
export class AuthEffects {
  actions$: Actions = inject(Actions);

  constructor(private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap((action) =>
        this.authService
          .register(action.email, action.password, action.repeatedPassword)
          .pipe(
            map(() => AuthActions.registerSuccess()),
            catchError((error) =>
              of(AuthActions.registerFailed({ errors: error.error }))
            )
          )
      )
    )
  );
}
