import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { InputComponent } from '../../../../shared/components/input/input.component';

import { AppState } from '../../../../store/app.store';

import * as AuthActions from '../../store/actions';

import {
  selectPasswordForgottenErrors,
  selectPasswordForgottenStatus,
} from '../../store/selectors';

import { Status } from '../../../../shared/enums/status.enum';

import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-password-forgotten',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, InputComponent],
  templateUrl: './password-forgotten.component.html',
  styleUrl: './password-forgotten.component.scss',
})
export class PasswordForgottenComponent {
  status$: Observable<Status>;
  errors$: Observable<any>;

  status: Status;
  errors: any;

  passwordForgottenForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.status$ = this.store.select(selectPasswordForgottenStatus);
    this.errors$ = this.store.select(selectPasswordForgottenErrors);

    this.status$.subscribe((status) => (this.status = status));
    this.errors$.subscribe((errors) => (this.errors = errors));

    this.passwordForgottenForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  get emailError(): string {
    return ErrorUtil.getInputError('ERRORS.EMAIL.', this.errors, [
      'INVALID_EMAIL',
      'EMAIL_NOT_FOUND',
    ]);
  }

  onSubmitClick() {
    const { email } = this.passwordForgottenForm.value;

    this.store.dispatch(AuthActions.passwordForgotten({ email }));
  }
}
