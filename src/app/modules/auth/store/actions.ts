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
  '[Register ConfirFm Page] Register Confirm Success',
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

export const logout = createAction('[Auth] Logout', props<{ delay: number }>());

export const passwordForgotten = createAction(
  '[Password Forgotten Page] Password Forgotten',
  props<{ email: string }>(),
);
export const passwordForgottenSuccess = createAction(
  '[Password Forgotten Page] Password Forgotten Success',
);
export const passwordForgottenFailed = createAction(
  '[Password Forgotten Page] Password Forgotten Failed',
  props<{ errors: any }>(),
);

export const resetPassword = createAction(
  '[Reset Password Page] Reset Password',
  props<{
    password: string;
    repeatedPassword: string;
    resetPasswordToken: string;
  }>(),
);
export const resetPasswordSuccess = createAction(
  '[Reset Password Page] Reset Password Success',
);
export const resetPasswordFailed = createAction(
  '[Reset Password Page] Reset Password Failed',
  props<{ errors: any }>(),
);
