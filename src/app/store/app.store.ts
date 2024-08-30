import { Action, ActionReducer } from '@ngrx/store';

import { AuthEffects } from '../modules/auth/store/effects';
import { UserEffects } from '../shared/store/user/effects';
import { ContactEffects } from '../shared/store/contact/effects';
import { SettingsEffects } from '../modules/settings/store/effects';
import { ImageUploadEffects } from '../shared/store/image-upload/effects';

import {
  registerReducer,
  registerConfirmReducer,
  loginReducer,
  passwordForgottenReducer,
  resetPasswordReducer,
} from '../modules/auth/store/reducers';
import { userReducer } from '../shared/store/user/reducers';
import { contactReducer } from '../shared/store/contact/reducers';
import {
  settingsAccountContactReducer,
  settingsAccountEmailReducer,
  settingsAccountPasswordReducer,
} from '../modules/settings/store/reducers';
import { imageUploadReducer } from '../shared/store/image-upload/reducers';

import { RegisterState } from '../modules/auth/store/register.state';
import { RegisterConfirmState } from '../modules/auth/store/register-confirm.state';
import { LoginState } from '../modules/auth/store/login.state';
import { PasswordForgottenState } from '../modules/auth/store/password-forgotten.state';
import { ResetPasswordState } from '../modules/auth/store/reset-password.state';
import { UserState } from '../shared/store/user/user.state';
import { ContactState } from '../shared/store/contact/contact.state';
import { SettingsAccountEmailState } from '../modules/settings/store/settings-account-email.state';
import { SettingsAccountPasswordState } from '../modules/settings/store/settings-account-password.state';
import { SettingsAccountContactState } from '../modules/settings/store/settings-account-contact.state';
import { ImageUploadState } from '../shared/store/image-upload/image-upload.state';

export interface AppState {
  register: RegisterState;
  registerConfirm: RegisterConfirmState;
  login: LoginState;
  passwordForgotten: PasswordForgottenState;
  resetPassword: ResetPasswordState;
  user: UserState;
  contact: ContactState;
  settingsAccountEmail: SettingsAccountEmailState;
  settingsAccountPassword: SettingsAccountPasswordState;
  settingsAccountContact: SettingsAccountContactState;
  imageUpload: ImageUploadState;
}

export interface AppStore {
  register: ActionReducer<RegisterState, Action>;
  registerConfirm: ActionReducer<RegisterConfirmState, Action>;
  login: ActionReducer<LoginState, Action>;
  passwordForgotten: ActionReducer<PasswordForgottenState, Action>;
  resetPassword: ActionReducer<ResetPasswordState, Action>;
  user: ActionReducer<UserState, Action>;
  contact: ActionReducer<ContactState, Action>;
  settingsAccountEmail: ActionReducer<SettingsAccountEmailState, Action>;
  settingsAccountPassword: ActionReducer<SettingsAccountPasswordState, Action>;
  settingsAccountContact: ActionReducer<SettingsAccountContactState, Action>;
  imageUpload: ActionReducer<ImageUploadState, Action>;
}

export const appStore: AppStore = {
  register: registerReducer,
  registerConfirm: registerConfirmReducer,
  login: loginReducer,
  passwordForgotten: passwordForgottenReducer,
  resetPassword: resetPasswordReducer,
  user: userReducer,
  contact: contactReducer,
  settingsAccountEmail: settingsAccountEmailReducer,
  settingsAccountPassword: settingsAccountPasswordReducer,
  settingsAccountContact: settingsAccountContactReducer,
  imageUpload: imageUploadReducer,
};

export const appEffects = [
  AuthEffects,
  UserEffects,
  ContactEffects,
  SettingsEffects,
  ImageUploadEffects,
];
