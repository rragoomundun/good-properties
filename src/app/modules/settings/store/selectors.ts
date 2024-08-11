import { createSelector } from '@ngrx/store';

import { SettingsAccountEmailState } from './settings-account-email.state';
import { SettingsAccountPasswordState } from './settings-account-password.state';

import { AppState } from '../../../store/app.store';

const settingsAccountEmailState = (state: AppState) =>
  state.settingsAccountEmail;

export const selectSettingsAccountEmailStatus = createSelector(
  settingsAccountEmailState,
  (state: SettingsAccountEmailState) => state.status,
);

export const selectSettingsAccountEmailErrors = createSelector(
  settingsAccountEmailState,
  (state: SettingsAccountEmailState) => state.errors,
);

const settingsAccountPasswordState = (state: AppState) =>
  state.settingsAccountPassword;

export const selectSettingsAccountPasswordStatus = createSelector(
  settingsAccountPasswordState,
  (state: SettingsAccountPasswordState) => state.status,
);

export const selectSettingsAccountPasswordErrors = createSelector(
  settingsAccountPasswordState,
  (state: SettingsAccountPasswordState) => state.errors,
);
