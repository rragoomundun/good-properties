import { createAction, props } from '@ngrx/store';

import { User } from '../../models/User.model';

export const getCurrentUser = createAction('[User] Get Current User');
export const getCurrentUserSuccess = createAction(
  '[User] Get Current User Success',
  props<{ user: User }>(),
);
export const getCurrentUserFailed = createAction(
  '[User] Get Current User Failed',
);

export const clearCurrentUser = createAction('[User] Clear Current User');
