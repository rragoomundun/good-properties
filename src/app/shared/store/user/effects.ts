import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UserService } from '../../services/user/user.service';

import * as UserActions from './actions';

@Injectable()
export class UserEffects {
  action$: Actions = inject(Actions);

  constructor(private userService: UserService) {}

  getCurrentUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getCurrentUser),
      exhaustMap(() =>
        this.userService.getCurrentUser().pipe(
          map((user) => UserActions.getCurrentUserSuccess({ user })),
          catchError(() => of(UserActions.getCurrentUserFailed())),
        ),
      ),
    ),
  );
}
