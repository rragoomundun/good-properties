import { createSelector } from '@ngrx/store';

import { UserState } from './user.state';

import { AppState } from '../../../store/app.store';

const userState = (state: AppState) => state.user;

export const selectUser = createSelector(
  userState,
  (state: UserState) => state.user,
);

export const selectUserStatus = createSelector(
  userState,
  (state: UserState) => state.status,
);
