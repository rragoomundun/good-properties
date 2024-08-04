import { createReducer, on } from '@ngrx/store';

import { RegisterState } from './register.state';
import { RegisterConfirmState } from './register-confirm.state';
import { LoginState } from './login.state';

import * as AuthActions from './actions';

import { Status } from '../../../shared/enums/status.enum';

export const initialRegisterState: RegisterState = {
  status: Status.PENDING,
  errors: null,
};

export const registerReducer = createReducer(
  initialRegisterState,
  on(AuthActions.register, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(AuthActions.registerSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
    errors: null,
  })),
  on(AuthActions.registerFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);

export const initialRegisterConfirmState: RegisterConfirmState = {
  status: Status.IN_PROGRESS,
};

export const registerConfirmReducer = createReducer(
  initialRegisterConfirmState,
  on(AuthActions.registerConfirm, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(AuthActions.registerConfirmSuccess, (state) => ({
    ...state,
    status: Status.SUCCESS,
  })),
  on(AuthActions.registerConfirmFailed, (state) => ({
    ...state,
    status: Status.ERROR,
  })),
);

export const initialLoginState: LoginState = {
  status: Status.PENDING,
  errors: null,
};

export const loginReducer = createReducer(
  initialLoginState,
  on(AuthActions.login, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    errors: null,
  })),
  on(AuthActions.loginFailed, (state, { errors }) => ({
    ...state,
    status: Status.ERROR,
    errors,
  })),
);
