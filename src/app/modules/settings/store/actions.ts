import { createAction, props } from '@ngrx/store';

export const initEmail = createAction('[Settings Account Page] Init Email');
export const updateEmail = createAction(
  '[Settings Account Page] Update Email',
  props<{ email: string }>(),
);
export const updateEmailSuccess = createAction(
  '[Settings Account Page] Update Email Success',
);
export const updateEmailFailed = createAction(
  '[Settings Account Page] Update Email Failed',
  props<{ errors: any }>(),
);

export const initPassword = createAction(
  '[Settings Account Page] Init Password',
);
export const updatePassword = createAction(
  '[Settings Account Page] Update Password',
  props<{ password: string; repeatedPassword: string }>(),
);
export const updatePasswordSuccess = createAction(
  '[Settings Account Page] Update Password Success',
);
export const updatePasswordFailed = createAction(
  '[Settings Account Page] Update Password Failed',
  props<{ errors: any }>(),
);

export const initContact = createAction('[Settings Account Page] Init Contact');
export const updateContact = createAction(
  '[Settings Account Page] Update Contact',
  props<{ email: string; telephone: string; whatsapp: string }>(),
);
export const updateContactSuccess = createAction(
  '[Settings Account Page] Update Contact Success',
);
export const updateContactFailed = createAction(
  '[Settings Account Page] Update Contact Failed',
  props<{ errors: any }>(),
);
