import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { InputComponent } from '../../../../shared/components/input/input.component';

import { AppState } from '../../../../store/app.store';

import * as AuthActions from '../../store/actions';

import { selectLoginErrors, selectLoginStatus } from '../../store/selectors';

import { Status } from '../../../../shared/enums/status.enum';

import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, RouterModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  status$: Observable<Status>;
  errors$: Observable<any>;

  status: Status;
  errors: any;

  loginForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.status$ = this.store.select(selectLoginStatus);
    this.errors$ = this.store.select(selectLoginErrors);

    this.status$.subscribe((status) => (this.status = status));
    this.errors$.subscribe((errors) => (this.errors = errors));

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get emailError(): string {
    return ErrorUtil.getInputError('ERRORS.EMAIL.', this.errors, [
      'INVALID_EMAIL',
    ]);
  }

  get passwordError(): string {
    return ErrorUtil.getInputError('ERRORS.PASSWORD.', this.errors, [
      'PASSWORD_MIN_LENGTH',
    ]);
  }

  onLoginClick(): void {
    const { email, password } = this.loginForm.value;

    this.store.dispatch(
      AuthActions.login({
        email,
        password,
      }),
    );
  }
}
