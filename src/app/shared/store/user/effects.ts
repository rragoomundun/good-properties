import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, concatMap, of } from 'rxjs';

import { UserService } from '../../services/user/user.service';

import * as UserActions from './actions';
import * as ContactActions from '../contact/actions';

@Injectable()
export class UserEffects {
  action$: Actions = inject(Actions);

  constructor(private userService: UserService) {}

  getCurrentUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getCurrentUser),
      exhaustMap(() =>
        this.userService.getCurrentUser().pipe(
          concatMap((user) => [
            UserActions.getCurrentUserSuccess({ user }),
            ContactActions.getCurrentUserContact(),
          ]),
          catchError(() => of(UserActions.getCurrentUserFailed())),
        ),
      ),
    ),
  );
}
