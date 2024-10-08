import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { InputComponent } from '../../../../shared/components/input/input.component';

import * as AuthActions from '../../store/actions';
import {
  selectRegisterErrors,
  selectRegisterStatus,
} from '../../store/selectors';

import { AppState } from '../../../../store/app.store';

import { Status } from '../../../../shared/enums/status.enum';

import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, AsyncPipe, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  status$: Observable<Status>;
  errors$: Observable<any>;

  status: Status;
  errors: any;

  registerForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.status$ = this.store.select(selectRegisterStatus);
    this.errors$ = this.store.select(selectRegisterErrors);

    this.status$.subscribe((status) => (this.status = status));
    this.errors$.subscribe((errors) => (this.errors = errors));

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });
  }

  get emailError(): string {
    return ErrorUtil.getInputError('ERRORS.EMAIL.', this.errors, [
      'INVALID_EMAIL',
      'EMAIL_IN_USE',
    ]);
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

  onRegisterClick() {
    const { value } = this.registerForm;

    this.store.dispatch(
      AuthActions.register({
        email: value.email,
        password: value.password,
        repeatedPassword: value.repeatedPassword,
      }),
    );
  }
}
