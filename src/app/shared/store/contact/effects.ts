import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UserService } from '../../services/user/user.service';

import * as ContactActions from './actions';

@Injectable()
export class ContactEffects {
  action$: Actions = inject(Actions);

  constructor(private userService: UserService) {}

  getCurrentUserContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(ContactActions.getCurrentUserContact),
      exhaustMap(() =>
        this.userService.getCurrentUserContact().pipe(
          map((contact) =>
            ContactActions.getCurrentUserContactSuccess({ contact }),
          ),
          catchError(() => of(ContactActions.getCurrentUserContactFailed())),
        ),
      ),
    ),
  );
}
