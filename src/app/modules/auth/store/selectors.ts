import { createSelector } from '@ngrx/store';

import { RegisterState } from './register.state';
import { RegisterConfirmState } from './register-confirm.state';
import { LoginState } from './login.state';
import { PasswordForgottenState } from './password-forgotten.state';

import { AppState } from '../../../store/app.store';

const registerState = (state: AppState) => state.register;

export const selectRegisterStatus = createSelector(
  registerState,
  (state: RegisterState) => state.status,
);

export const selectRegisterErrors = createSelector(
  registerState,
  (state: RegisterState) => state.errors,
);

const registerConfirmState = (state: AppState) => state.registerConfirm;

export const selectRegisterConfirmStatus = createSelector(
  registerConfirmState,
  (state: RegisterConfirmState) => state.status,
);

const loginState = (state: AppState) => state.login;

export const selectLoginStatus = createSelector(
  loginState,
  (state: LoginState) => state.status,
);

export const selectLoginErrors = createSelector(
  loginState,
  (state: LoginState) => state.errors,
);

const passwordForgottenState = (state: AppState) => state.passwordForgotten;

export const selectPasswordForgottenStatus = createSelector(
  passwordForgottenState,
  (state: PasswordForgottenState) => state.status,
);

export const selectPasswordForgottenErrors = createSelector(
  passwordForgottenState,
  (state: PasswordForgottenState) => state.errors,
);
