import { Action, ActionReducer } from '@ngrx/store';

import { AuthEffects } from '../modules/auth/store/effects';

import { registerReducer } from '../modules/auth/store/reducers';

import { RegisterState } from '../modules/auth/store/register.state';

export interface AppState {
  register: RegisterState;
}

export interface AppStore {
  register: ActionReducer<RegisterState, Action>;
}

export const appStore: AppStore = {
  register: registerReducer,
};

export const appEffects = [AuthEffects];
