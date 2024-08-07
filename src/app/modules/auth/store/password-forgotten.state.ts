import { Status } from '../../../shared/enums/status.enum';

export interface PasswordForgottenState {
  status: Status;
  errors: any;
}
