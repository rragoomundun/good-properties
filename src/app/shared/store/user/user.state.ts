import { Status } from '../../enums/status.enum';

import { User } from '../../models/User.model';

export interface UserState {
  user: User | null;
  status: Status;
}
