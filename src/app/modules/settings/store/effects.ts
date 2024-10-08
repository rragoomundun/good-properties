import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError, of, mergeMap } from 'rxjs';

import * as AuthActions from '../../../modules/auth/store/actions';
import * as SettingsActions from './actions';
import * as UserActions from '../../../shared/store/user/actions';
import * as ContactActions from '../../../shared/store/contact/actions';

import { SettingsService } from '../services/settings/settings.service';

@Injectable()
export class SettingsEffects {
  actions$: Actions = inject(Actions);

  constructor(
    private router: Router,
    private settingsService: SettingsService,
  ) {}

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

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.updateContact),
      concatMap((action) =>
        this.settingsService
          .updateContact(action.email, action.telephone, action.whatsapp)
          .pipe(
            concatMap(() => [
              SettingsActions.updateContactSuccess(),
              ContactActions.updateCurrentUserContact({
                email: action.email,
                telephone: action.telephone,
                whatsapp: action.whatsapp,
              }),
            ]),
            catchError((error) =>
              of(SettingsActions.updateContactFailed({ errors: error.error })),
            ),
          ),
      ),
    ),
  );

  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.deleteAccount),
      mergeMap(() =>
        this.settingsService.deleteAccount().pipe(
          concatMap(() => [
            SettingsActions.deleteAccountSuccess(),
            AuthActions.logout({ delay: 3000 }),
          ]),
          catchError(() => of(SettingsActions.deleteAccountFailed())),
        ),
      ),
    ),
  );
}
