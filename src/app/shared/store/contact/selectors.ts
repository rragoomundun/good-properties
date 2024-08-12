import { createSelector } from '@ngrx/store';

import { ContactState } from './contact.state';

import { AppState } from '../../../store/app.store';

const contactState = (state: AppState) => state.contact;

export const selectContact = createSelector(
  contactState,
  (state: ContactState) => state.contact,
);

export const selectContactStatus = createSelector(
  contactState,
  (state: ContactState) => state.status,
);
