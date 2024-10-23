import { Component, OnInit, viewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store/app.store';

import * as NewOfferActions from '../../store/actions';

import {
  selectNewOfferErrors,
  selectNewOfferFeatures,
} from '../../store/selectors';

import { ImageUploaderComponent } from '../../../../shared/components/image-uploader/image-uploader.component';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { TextareaComponent } from '../../../../shared/components/textarea/textarea.component';
import { AutocompleteComponent } from '../../../../shared/components/autocomplete/autocomplete.component';

import { MauritiusUtil } from '../../../../shared/utils/mauritius.util';
import { ErrorUtil } from '../../../../shared/utils/error.util';

import { Features } from '../../../../shared/models/Features.model';
import { ImageUpload } from '../../../../shared/models/ImageUpload.model';

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
export class NewOfferComponent implements OnInit {
  imageUploaderComponent = viewChild<ImageUploaderComponent>('imageUploader');

  features$: Observable<Features>;
  errors$: Observable<any>;

  features: Features;
  error: any;

  newOfferForm: FormGroup;
  cities: string[];
  contactSettingsLink: string;

  constructor(private store: Store<AppState>) {
    this.newOfferForm = new FormGroup({
      typeOfGood: new FormControl('house', [Validators.required]),
      transactionType: new FormControl('to-rent', [Validators.required]),
      squareMeters: new FormControl('', [Validators.required]),
      rooms: new FormControl('', [Validators.required]),
      bedrooms: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      generalFeatures: new FormArray([]),
      indoorFeatures: new FormArray([]),
      outdoorFeatures: new FormArray([]),
    });

    this.cities = MauritiusUtil.getCities();

    this.features$ = this.store.select(selectNewOfferFeatures);
    this.errors$ = this.store.select(selectNewOfferErrors);

    this.features$.subscribe((features) => {
      this.features = features;

      if (this.features) {
        for (let i = 0; i < this.features.general.length; i++) {
          (<FormArray>this.newOfferForm.controls['generalFeatures']).push(
            new FormControl(false),
          );
        }

        for (let i = 0; i < this.features.indoor.length; i++) {
          (<FormArray>this.newOfferForm.controls['indoorFeatures']).push(
            new FormControl(false),
          );
        }

        for (let i = 0; i < this.features.outdoor.length; i++) {
          (<FormArray>this.newOfferForm.controls['outdoorFeatures']).push(
            new FormControl(false),
          );
        }
      }
    });

    this.errors$.subscribe((error) => (this.error = error));

    this.contactSettingsLink = `${window.location.origin}/settings/contact`;
  }

  ngOnInit(): void {
    this.store.dispatch(NewOfferActions.init());
    this.store.dispatch(NewOfferActions.getFeatures());
  }

  getGeneralFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.newOfferForm.controls['generalFeatures']).at(index)
    );
  }

  getIndoorFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.newOfferForm.controls['indoorFeatures']).at(index)
    );
  }

  getOutdoorFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.newOfferForm.controls['outdoorFeatures']).at(index)
    );
  }

  onFormKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      event.preventDefault();
    }
  }

  onCreateClick(): void {
    const images = this.imageUploaderComponent().images.map(
      (image: ImageUpload) => image.fileLink,
    );
    const features = [];
    const cityId = MauritiusUtil.getCityIdFromName(
      this.newOfferForm.get('city').value,
    );

    for (let i = 0; i < this.features.general.length; i++) {
      if (this.getGeneralFeaturesControl(i).value) {
        features.push(this.features.general[i].id);
      }
    }

    for (let i = 0; i < this.features.indoor.length; i++) {
      if (this.getIndoorFeaturesControl(i).value) {
        features.push(this.features.indoor[i].id);
      }
    }

    for (let i = 0; i < this.features.outdoor.length; i++) {
      if (this.getOutdoorFeaturesControl(i).value) {
        features.push(this.features.outdoor[i].id);
      }
    }

    this.store.dispatch(
      NewOfferActions.createOffer({
        images,
        typeOfGood: this.newOfferForm.value.typeOfGood,
        transactionType: this.newOfferForm.value.transactionType,
        squareMeters: this.newOfferForm.value.squareMeters,
        nbRooms: this.newOfferForm.value.rooms,
        nbBedrooms: this.newOfferForm.value.bedrooms,
        price: this.newOfferForm.value.price,
        cityId,
        description: this.newOfferForm.value.description,
        features,
      }),
    );
  }
}
