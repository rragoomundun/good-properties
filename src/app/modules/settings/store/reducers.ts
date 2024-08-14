import { createReducer, on } from '@ngrx/store';

import { SettingsAccountEmailState } from './settings-account-email.state';
import { SettingsAccountPasswordState } from './settings-account-password.state';
import { SettingsAccountContactState } from './settings-account-contact.state';
import { SettingsAccountDeleteState } from './settings-account-delete.state';

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

export const initialSettingsAccountContactState: SettingsAccountContactState = {
  status: Status.PENDING,
  errors: null,
};

export const settingsAccountContactReducer = createReducer(
  initialSettingsAccountContactState,
  on(SettingsActions.initContact, (state) => ({
    ...state,
    status: Status.PENDING,
    errors: null,
  })),
  on(SettingsActions.updateContact, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SettingsActions.updateContactSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
    errors: null,
  })),
  on(SettingsActions.updateContactFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);

export const initialSettingsAccountDeleteState: SettingsAccountDeleteState = {
  status: Status.PENDING,
};

export const settingsAccountDeleteReducer = createReducer(
  initialSettingsAccountDeleteState,
  on(SettingsActions.initDelete, (state) => ({
    ...state,
    status: Status.PENDING,
  })),
  on(SettingsActions.deleteAccount, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(SettingsActions.deleteAccountSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
  })),
  on(SettingsActions.deleteAccountFailed, (state) => ({
    ...state,
    status: Status.ERROR,
  })),
);
