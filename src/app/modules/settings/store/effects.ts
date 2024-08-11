import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError, of } from 'rxjs';

import * as SettingsActions from './actions';
import * as UserActions from '../../../shared/store/user/actions';

import { SettingsService } from '../services/settings/settings.service';

@Injectable()
export class SettingsEffects {
  actions$: Actions = inject(Actions);

  constructor(private settingsService: SettingsService) {}

  updateEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.updateEmail),
      concatMap((action) =>
        this.settingsService.updateEmail(action.email).pipe(
          concatMap(() => [
            SettingsActions.updateEmailSuccess(),
            UserActions.updateCurrentUserEmail({ email: action.email }),
          ]),
          catchError((error) =>
            of(SettingsActions.updateEmailFailed({ errors: error.error })),
          ),
        ),
      ),
    ),
  );

  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.updatePassword),
      concatMap((action) =>
        this.settingsService
          .updatePassword(action.password, action.repeatedPassword)
          .pipe(
            map(() => SettingsActions.updatePasswordSuccess()),
            catchError((error) =>
              of(SettingsActions.updatePasswordFailed({ errors: error.error })),
            ),
          ),
      ),
    ),
  );
}
