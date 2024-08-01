import { createReducer, on } from '@ngrx/store';

import { RegisterState } from './register.state';

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
