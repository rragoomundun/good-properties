import { createReducer, on } from '@ngrx/store';

import { SettingsAccountEmailState } from './settings-account-email.state';
import { SettingsAccountPasswordState } from './settings-account-password.state';

import * as SettingsActions from './actions';

import { Status } from '../../../shared/enums/status.enum';

export const initialSettingsAccountEmailState: SettingsAccountEmailState = {
  status: Status.PENDING,
  errors: null,
};

export const settingsAccountEmailReducer = createReducer(
  initialSettingsAccountEmailState,
  on(SettingsActions.initEmail, (state) => ({
    ...state,
    status: Status.PENDING,
    errors: null,
  })),
  on(SettingsActions.updateEmail, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SettingsActions.updateEmailSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
    errors: null,
  })),
  on(SettingsActions.updateEmailFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);

export const initialSettingsAccountPasswordState: SettingsAccountPasswordState =
  {
    status: Status.PENDING,
    errors: null,
  };

export const settingsAccountPasswordReducer = createReducer(
  initialSettingsAccountPasswordState,
  on(SettingsActions.initPassword, (state) => ({
    ...state,
    status: Status.PENDING,
    errors: null,
  })),
  on(SettingsActions.updatePassword, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SettingsActions.updatePasswordSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
    errors: null,
  })),
  on(SettingsActions.updatePasswordFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);
