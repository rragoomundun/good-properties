import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  viewChild,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { SelectComponent } from '../../../../shared/components/select/select.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { InputMinMaxComponent } from '../../../../shared/components/input-min-max/input-min-max.component';
import { AutocompleteSelectMultipleComponent } from '../../../../shared/components/autocomplete-select-multiple/autocomplete-select-multiple.component';

import { MauritiusUtil } from '../../../../shared/utils/mauritius.util';

import { AppState } from '../../../../store/app.store';

import { Features } from '../../../../shared/models/Features.model';

import { selectSearchFeatures } from '../../store/selectors';

import * as SearchActions from '../../store/actions';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    SelectComponent,
    InputComponent,
    InputMinMaxComponent,
    AutocompleteSelectMultipleComponent,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent implements OnInit {
  private modalService = inject(NgbModal);

  autocompleteSelectMultipleComponent =
    viewChild<AutocompleteSelectMultipleComponent>('citiesSelect');

  features$: Observable<Features>;

  features: Features;

  searchForm: FormGroup;
  cities: string[];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.searchForm = new FormGroup({
      transactionType: new FormControl('to-rent', [Validators.required]),
      typeOfGood: new FormControl('house', [Validators.required]),
      cities: new FormControl('', [Validators.required]),
      minPrice: new FormControl(null),
      maxPrice: new FormControl(null),
      minSquareMeters: new FormControl(null),
      maxSquareMeters: new FormControl(null),
      nbRooms: new FormControl(null),
      nbBedrooms: new FormControl(null),
      generalFeatures: new FormArray([]),
      indoorFeatures: new FormArray([]),
      outdoorFeatures: new FormArray([]),
    });

    this.cities = MauritiusUtil.getCities();

    this.features$ = this.store.select(selectSearchFeatures);

    this.features$.subscribe((features) => {
      this.features = features;

      if (this.features) {
        for (let i = 0; i < this.features.general.length; i++) {
          (<FormArray>this.searchForm.controls['generalFeatures']).push(
            new FormControl(false),
          );
        }

        for (let i = 0; i < this.features.indoor.length; i++) {
          (<FormArray>this.searchForm.controls['indoorFeatures']).push(
            new FormControl(false),
          );
        }

        for (let i = 0; i < this.features.outdoor.length; i++) {
          (<FormArray>this.searchForm.controls['outdoorFeatures']).push(
            new FormControl(false),
          );
        }
      }
    });
  }

  get isFormValid(): boolean {
    return this.autocompleteSelectMultipleComponent().selectedItems.length > 0;
  }

  ngOnInit(): void {
    this.store.dispatch(SearchActions.getFeatures());

    // Init controls if they are query parameters
    const { queryParams } = this.activatedRoute.snapshot;

    if (queryParams['type_of_good']) {
      this.searchForm.controls['typeOfGood'].setValue(
        queryParams['type_of_good'],
      );
    }

    if (queryParams['transaction_type']) {
      this.searchForm.controls['transactionType'].setValue(
        queryParams['transaction_type'],
      );
    }

    if (queryParams['city_ids']) {
      const cityIds = queryParams['city_ids'].split(',');

      setTimeout(() => {
        for (const cityId of cityIds) {
          this.autocompleteSelectMultipleComponent().selectedItems.push(
            MauritiusUtil.getNameFromCityId(Number(cityId)),
          );
        }
      });
    }

    if (queryParams['min_price']) {
      this.searchForm.controls['minPrice'].setValue(queryParams['min_price']);
    }

    if (queryParams['max_price']) {
      this.searchForm.controls['maxPrice'].setValue(queryParams['max_price']);
    }

    if (queryParams['min_square_meters']) {
      this.searchForm.controls['minSquareMeters'].setValue(
        queryParams['min_square_meters'],
      );
    }

    if (queryParams['max_square_meters']) {
      this.searchForm.controls['maxSquareMeters'].setValue(
        queryParams['max_square_meters'],
      );
    }

    if (queryParams['nb_rooms']) {
      this.searchForm.controls['nbRooms'].setValue(queryParams['nb_rooms']);
    }

    if (queryParams['nb_bedrooms']) {
      this.searchForm.controls['nbBedrooms'].setValue(
        queryParams['nb_bedrooms'],
      );
    }

    this.features$.subscribe(() => {
      if (this.features && queryParams['features']) {
        const generalFeaturesStart = 1;
        const generalFeaturesEnd = this.features.general.length;
        const indoorFeaturesStart = generalFeaturesEnd + 1;
        const indoorFeaturesEnd =
          indoorFeaturesStart + this.features.indoor.length - 1;
        const featureIds = queryParams['features'].split(',');

        for (const featureId of featureIds) {
          const featureIdNumber = Number(featureId);

          if (
            featureIdNumber >= generalFeaturesStart &&
            featureIdNumber <= generalFeaturesEnd
          ) {
            this.getGeneralFeaturesControl(featureIdNumber - 1).setValue(true);
          } else if (
            featureIdNumber >= indoorFeaturesStart &&
            featureIdNumber <= indoorFeaturesEnd
          ) {
            this.getIndoorFeaturesControl(
              featureIdNumber -
                this.features.general.length -
                this.features.indoor.length -
                1,
            ).setValue(true);
          } else {
            this.getOutdoorFeaturesControl(
              featureIdNumber -
                this.features.general.length -
                this.features.indoor.length -
                this.features.outdoor.length -
                1,
            ).setValue(true);
          }
        }
      }
    });
  }

  getGeneralFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.searchForm.controls['generalFeatures']).at(index)
    );
  }

  getIndoorFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.searchForm.controls['indoorFeatures']).at(index)
    );
  }

  getOutdoorFeaturesControl(index: number): FormControl {
    return <FormControl>(
      (<FormArray>this.searchForm.controls['outdoorFeatures']).at(index)
    );
  }

  onMoreFiltersClick(moreFiltersModal: TemplateRef<any>): void {
    this.modalService.open(moreFiltersModal, { size: 'lg' });
  }

  onSearchClick(): void {
    const {
      typeOfGood,
      transactionType,
      minPrice,
      maxPrice,
      minSquareMeters,
      maxSquareMeters,
      nbRooms,
      nbBedrooms,
      generalFeatures,
      indoorFeatures,
      outdoorFeatures,
    } = this.searchForm.value;
    const cityIds = [];
    const features = [];
    const queryParams: any = {
      type_of_good: typeOfGood,
      transaction_type: transactionType,
    };

    for (const city of this.autocompleteSelectMultipleComponent()
      .selectedItems) {
      cityIds.push(MauritiusUtil.getCityIdFromName(city));
    }

    queryParams.city_ids = cityIds.join(',');

    if (minPrice && minPrice > 0) {
      queryParams.min_price = minPrice;
    }

    if (maxPrice && maxPrice > 0) {
      queryParams.max_price = maxPrice;
    }

    if (minSquareMeters && minSquareMeters > 0) {
      queryParams.min_square_meters = minSquareMeters;
    }

    if (maxSquareMeters && maxSquareMeters > 0) {
      queryParams.max_square_meters = maxSquareMeters;
    }

    if (nbRooms && nbRooms > 0) {
      queryParams.nb_rooms = nbRooms;
    }

    if (nbBedrooms && nbBedrooms > 0) {
      queryParams.nb_bedrooms = nbBedrooms;
    }

    if (
      generalFeatures.includes(true) ||
      indoorFeatures.includes(true) ||
      outdoorFeatures.includes(true)
    ) {
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

      queryParams.features = features.join(',');
    }

    this.router.navigate(['/'], {
      queryParams,
    });
  }
}
