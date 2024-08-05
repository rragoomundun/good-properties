import { Action, ActionReducer } from '@ngrx/store';

import { AuthEffects } from '../modules/auth/store/effects';
import { UserEffects } from '../shared/store/user/effects';

import {
  registerConfirmReducer,
  registerReducer,
  loginReducer,
  passwordForgottenReducer,
} from '../modules/auth/store/reducers';
import { userReducer } from '../shared/store/user/reducers';

import { RegisterState } from '../modules/auth/store/register.state';
import { RegisterConfirmState } from '../modules/auth/store/register-confirm.state';
import { LoginState } from '../modules/auth/store/login.state';
import { PasswordForgottenState } from '../modules/auth/store/password-forgotten.state';
import { UserState } from '../shared/store/user/user.state';

export interface AppState {
  register: RegisterState;
  registerConfirm: RegisterConfirmState;
  login: LoginState;
  passwordForgotten: PasswordForgottenState;
  user: UserState;
}

export interface AppStore {
  register: ActionReducer<RegisterState, Action>;
  registerConfirm: ActionReducer<RegisterConfirmState, Action>;
  login: ActionReducer<LoginState, Action>;
  passwordForgotten: ActionReducer<PasswordForgottenState, Action>;
  user: ActionReducer<UserState, Action>;
}

export const appStore: AppStore = {
  register: registerReducer,
  registerConfirm: registerConfirmReducer,
  login: loginReducer,
  passwordForgotten: passwordForgottenReducer,
  user: userReducer,
};

export const appEffects = [AuthEffects, UserEffects];
