import { Status } from '../../../shared/enums/status.enum';

export interface ResetPasswordState {
  status: Status;
  errors: any;
}
