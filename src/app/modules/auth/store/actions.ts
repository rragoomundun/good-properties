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
