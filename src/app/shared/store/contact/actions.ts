import { createAction, props } from '@ngrx/store';

import { Contact } from '../../models/Contact.model';

export const getCurrentUserContact = createAction(
  '[Contact] Get Current User Contact',
);
export const getCurrentUserContactSuccess = createAction(
  '[Contact] Get Current User Contact Success',
  props<{ contact: Contact }>(),
);
export const getCurrentUserContactFailed = createAction(
  '[Contact] Get Current User Contact Failed',
);

export const updateCurrentUserContact = createAction(
  '[Contact] Update Current User Contact',
  props<{ email: string; telephone: string; whatsapp: string }>(),
);
