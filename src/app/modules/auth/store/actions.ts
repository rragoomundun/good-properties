import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register Page] Register',
  props<{ email: string; password: string; repeatedPassword: string }>(),
);
export const registerSuccess = createAction('[Register Page] Register Success');
export const registerFailed = createAction(
  '[Register Page] Register Failed',
  props<{ errors: any }>(),
);

export const registerConfirm = createAction(
  '[Register Confirm Page] Register Confirm',
  props<{ confirmationToken: string }>(),
);
export const registerConfirmSuccess = createAction(
  '[Register Confirm Page] Register Confirm Success',
);
export const registerConfirmFailed = createAction(
  '[Register Confirm Page] Register Confirm Failed',
);

export const login = createAction(
  '[Login Page] Login',
  props<{ email: string; password: string }>(),
);
export const loginSuccess = createAction('[Login Page] Login Success');
export const loginFailed = createAction(
  '[Login Page] Login Failed',
  props<{ errors: any }>(),
);

export const logout = createAction('[Header Component] Logout');
