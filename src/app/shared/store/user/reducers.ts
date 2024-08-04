import { createReducer, on } from '@ngrx/store';

import { Status } from '../../enums/status.enum';

import { UserState } from './user.state';

import * as UserActions from './actions';

export const initialUserState: UserState = {
  user: null,
  status: Status.PENDING,
};

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.getCurrentUser, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(UserActions.getCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: Status.SUCCESS,
  })),
  on(UserActions.getCurrentUserFailed, (state) => ({
    ...state,
    status: Status.ERROR,
  })),
);
