import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import { InputComponent } from '../../../../shared/components/input/input.component';

import { AppState } from '../../../../store/app.store';

import { selectUserEmail } from '../../../../shared/store/user/selectors';
import {
  selectSettingsAccountEmailErrors,
  selectSettingsAccountEmailStatus,
  selectSettingsAccountPasswordErrors,
  selectSettingsAccountPasswordStatus,
} from '../../store/selectors';

import * as SettingsActions from '../../store/actions';

import { ErrorUtil } from '../../../../shared/utils/error.util';

import { Status } from '../../../../shared/enums/status.enum';

@Component({
  selector: 'app-settings-account',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, InputComponent],
  templateUrl: './settings-account.component.html',
  styleUrl: './settings-account.component.scss',
})
export class SettingsAccountComponent implements OnInit {
  email$: Observable<string | undefined>;
  emailStatus$: Observable<Status>;
  emailErrors$: Observable<any>;
  passwordStatus$: Observable<Status>;
  passwordErrors$: Observable<any>;

  emailStatus: Status;
  emailErrors: any;
  passwordStatus: Status;
  passwordErrors: any;

  emailForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });

    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });

    this.email$ = this.store.select(selectUserEmail);
    this.emailStatus$ = this.store.select(selectSettingsAccountEmailStatus);
    this.emailErrors$ = this.store.select(selectSettingsAccountEmailErrors);

    this.passwordStatus$ = this.store.select(
      selectSettingsAccountPasswordStatus,
    );
    this.passwordErrors$ = this.store.select(
      selectSettingsAccountPasswordErrors,
    );

    this.email$.subscribe((email) =>
      this.emailForm.controls['email'].setValue(email),
    );
    this.emailStatus$.subscribe(
      (emailStatus) => (this.emailStatus = emailStatus),
    );
    this.emailErrors$.subscribe(
      (emailErrors) => (this.emailErrors = emailErrors),
    );

    this.passwordStatus$.subscribe(
      (passwordStatus) => (this.passwordStatus = passwordStatus),
    );
    this.passwordErrors$.subscribe(
      (passwordErrors) => (this.passwordErrors = passwordErrors),
    );
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.initEmail());
    this.store.dispatch(SettingsActions.initPassword());
  }

  get emailError(): string {
    return ErrorUtil.getInputError('ERRORS.EMAIL.', this.emailErrors, [
      'INVALID_EMAIL',
      'EMAIL_IN_USE',
    ]);
  }

  get passwordError(): string {
    return ErrorUtil.getInputError('ERRORS.PASSWORD.', this.passwordErrors, [
      'PASSWORD_MIN_LENGTH',
    ]);
  }

  get repeatedPasswordError(): string {
    return ErrorUtil.getInputError(
      'ERRORS.REPEATED_PASSWORD.',
      this.passwordErrors,
      ['REPEATED_PASSWORD_NO_MATCH'],
    );
  }

  onModifyEmailClick(): void {
    this.store.dispatch(
      SettingsActions.updateEmail({
        email: this.emailForm.controls['email'].value,
      }),
    );
  }

  onModifyPasswordClick(): void {
    const { password, repeatedPassword } = this.passwordForm.value;

    this.store.dispatch(
      SettingsActions.updatePassword({ password, repeatedPassword }),
    );
  }
}
