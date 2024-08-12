import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.store';

import { selectContact } from '../../../../shared/store/contact/selectors';
import {
  selectSettingsAccountContactErrors,
  selectSettingsAccountContactStatus,
} from '../../store/selectors';

import * as SettingsActions from '../../store/actions';

import { Status } from '../../../../shared/enums/status.enum';

import { Contact } from '../../../../shared/models/Contact.model';

import { InputComponent } from '../../../../shared/components/input/input.component';

import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-settings-contact',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, InputComponent],
  templateUrl: './settings-contact.component.html',
  styleUrl: './settings-contact.component.scss',
})
export class SettingsContactComponent implements OnInit {
  contact$: Observable<Contact | null>;
  status$: Observable<Status>;
  errors$: Observable<any | null>;

  status: Status;
  errors: any;

  contactForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.contactForm = new FormGroup({
      email: new FormControl(''),
      telephone: new FormControl(''),
      whatsapp: new FormControl(''),
    });

    this.contact$ = this.store.select(selectContact);
    this.status$ = this.store.select(selectSettingsAccountContactStatus);
    this.errors$ = this.store.select(selectSettingsAccountContactErrors);

    this.contact$.subscribe((contact: Contact | null) => {
      this.contactForm.controls['email'].setValue(contact?.email);
      this.contactForm.controls['telephone'].setValue(contact?.telephone);
      this.contactForm.controls['whatsapp'].setValue(contact?.whatsapp);
    });
    this.status$.subscribe((status: Status) => (this.status = status));
    this.errors$.subscribe((errors: Status) => (this.errors = errors));
  }

  get emailError(): string {
    return ErrorUtil.getInputError('ERRORS.EMAIL.', this.errors, [
      'INVALID_EMAIL',
    ]);
  }

  get telephoneError(): string {
    return ErrorUtil.getInputError(
      'ERRORS.TELEPHONE.',
      this.errors,
      ['NUMBER_ONLY', 'NUMBER_LENGTH'],
      'telephone',
    );
  }

  get whatsappError(): string {
    return ErrorUtil.getInputError(
      'ERRORS.TELEPHONE.',
      this.errors,
      ['NUMBER_ONLY', 'NUMBER_LENGTH'],
      'whatsapp',
    );
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.initContact());
  }

  onModifyClick(): void {
    this.store.dispatch(SettingsActions.updateContact(this.contactForm.value));
  }
}
