import { Status } from '../../../shared/enums/status.enum';

export interface LoginState {
  status: Status;
  errors: any;
}
