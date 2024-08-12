import { createReducer, on } from '@ngrx/store';

import { Status } from '../../enums/status.enum';

import { ContactState } from './contact.state';

import * as ContactActions from './actions';

export const initialContactState: ContactState = {
  contact: null,
  status: Status.PENDING,
};

export const contactReducer = createReducer(
  initialContactState,
  on(ContactActions.getCurrentUserContact, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(ContactActions.getCurrentUserContactSuccess, (state, { contact }) => ({
    ...state,
    contact,
    status: Status.SUCCESS,
  })),
  on(ContactActions.getCurrentUserContactFailed, (state) => ({
    ...state,
    status: Status.ERROR,
  })),
  on(
    ContactActions.updateCurrentUserContact,
    (state, { email, telephone, whatsapp }) => ({
      ...state,
      contact: {
        email,
        telephone,
        whatsapp,
      },
    }),
  ),
);
