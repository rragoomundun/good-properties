import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { InputComponent } from '../../../../shared/components/input/input.component';

import { AppState } from '../../../../store/app.store';

import {
  selectResetPasswordErrors,
  selectResetPasswordStatus,
} from '../../store/selectors';

import * as AuthActions from '../../store/actions';

import { Status } from '../../../../shared/enums/status.enum';
import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, InputComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  status$: Observable<Status>;
  errors$: Observable<any>;

  status: Status;
  errors: any;

  resetPasswordForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.status$ = this.store.select(selectResetPasswordStatus);
    this.errors$ = this.store.select(selectResetPasswordErrors);

    this.status$.subscribe((status) => (this.status = status));
    this.errors$.subscribe((errors) => (this.errors = errors));

    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });
  }

  get passwordError(): string {
    return ErrorUtil.getInputError('ERRORS.PASSWORD.', this.errors, [
      'PASSWORD_MIN_LENGTH',
    ]);
  }

  get repeatedPasswordError(): string {
    return ErrorUtil.getInputError('ERRORS.REPEATED_PASSWORD.', this.errors, [
      'REPEATED_PASSWORD_NO_MATCH',
    ]);
  }

  onModifyClick(): void {
    const { resetPasswordToken } = this.activatedRoute.snapshot.params;
    const { password, repeatedPassword } = this.resetPasswordForm.value;

    this.store.dispatch(
      AuthActions.resetPassword({
        password,
        repeatedPassword,
        resetPasswordToken,
      }),
    );
  }
}
