import { Status } from '../../enums/status.enum';

import { Contact } from '../../models/Contact.model';

export interface ContactState {
  contact: Contact | null;
  status: Status;
}
