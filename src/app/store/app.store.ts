import { Action, ActionReducer } from '@ngrx/store';

import { AuthEffects } from '../modules/auth/store/effects';
import { UserEffects } from '../shared/store/user/effects';
import { SettingsEffects } from '../modules/settings/store/effects';

import {
  registerReducer,
  registerConfirmReducer,
  loginReducer,
  passwordForgottenReducer,
  resetPasswordReducer,
} from '../modules/auth/store/reducers';
import { userReducer } from '../shared/store/user/reducers';
import {
  settingsAccountEmailReducer,
  settingsAccountPasswordReducer,
} from '../modules/settings/store/reducers';

import { RegisterState } from '../modules/auth/store/register.state';
import { RegisterConfirmState } from '../modules/auth/store/register-confirm.state';
import { LoginState } from '../modules/auth/store/login.state';
import { PasswordForgottenState } from '../modules/auth/store/password-forgotten.state';
import { ResetPasswordState } from '../modules/auth/store/reset-password.state';
import { UserState } from '../shared/store/user/user.state';
import { SettingsAccountEmailState } from '../modules/settings/store/settings-account-email.state';
import { SettingsAccountPasswordState } from '../modules/settings/store/settings-account-password.state';

export interface AppState {
  register: RegisterState;
  registerConfirm: RegisterConfirmState;
  login: LoginState;
  passwordForgotten: PasswordForgottenState;
  resetPassword: ResetPasswordState;
  user: UserState;
  settingsAccountEmail: SettingsAccountEmailState;
  settingsAccountPassword: SettingsAccountPasswordState;
}

export interface AppStore {
  register: ActionReducer<RegisterState, Action>;
  registerConfirm: ActionReducer<RegisterConfirmState, Action>;
  login: ActionReducer<LoginState, Action>;
  passwordForgotten: ActionReducer<PasswordForgottenState, Action>;
  resetPassword: ActionReducer<ResetPasswordState, Action>;
  user: ActionReducer<UserState, Action>;
  settingsAccountEmail: ActionReducer<SettingsAccountEmailState, Action>;
  settingsAccountPassword: ActionReducer<SettingsAccountPasswordState, Action>;
}

export const appStore: AppStore = {
  register: registerReducer,
  registerConfirm: registerConfirmReducer,
  login: loginReducer,
  passwordForgotten: passwordForgottenReducer,
  resetPassword: resetPasswordReducer,
  user: userReducer,
  settingsAccountEmail: settingsAccountEmailReducer,
  settingsAccountPassword: settingsAccountPasswordReducer,
};

export const appEffects = [AuthEffects, UserEffects, SettingsEffects];
