import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ImageUploaderComponent } from '../../../../shared/components/image-uploader/image-uploader.component';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { TextareaComponent } from '../../../../shared/components/textarea/textarea.component';
import { AutocompleteComponent } from '../../../../shared/components/autocomplete/autocomplete.component';

import { MauritiusUtil } from '../../../../shared/utils/mauritius.util';
import { ErrorUtil } from '../../../../shared/utils/error.util';

@Component({
  selector: 'app-new-offer',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    ImageUploaderComponent,
    SelectComponent,
    InputComponent,
    TextareaComponent,
    AutocompleteComponent,
  ],
  templateUrl: './new-offer.component.html',
  styleUrl: './new-offer.component.scss',
})
export class NewOfferComponent {
  newOfferForm: FormGroup;
  cities: string[];

  constructor() {
    this.newOfferForm = new FormGroup({
      typeOfGood: new FormControl('', [Validators.required]),
      transactionType: new FormControl('', [Validators.required]),
      squareMeters: new FormControl('', [Validators.required]),
      rooms: new FormControl('', [Validators.required]),
      bedrooms: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });

    this.cities = MauritiusUtil.getCities();
  }

  get squareMetersError(): string {
    return '';
  }

  get roomsError(): string {
    return '';
  }

  get bedroomsError(): string {
    return '';
  }

  get priceError(): string {
    return '';
  }

  get cityError(): string {
    return '';
  }

  onShowFormValueClick(): void {
    console.log(this.newOfferForm.value);
  }
}
