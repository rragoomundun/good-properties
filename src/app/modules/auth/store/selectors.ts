import { createSelector } from '@ngrx/store';

import { RegisterState } from './register.state';

import { AppState } from '../../../store/app.store';

const registerState = (state: AppState) => state.register;

export const selectRegisterStatus = createSelector(
  registerState,
  (state: RegisterState) => state.status
);

export const selectRegisterErrors = createSelector(
  registerState,
  (state: RegisterState) => state.errors
);
