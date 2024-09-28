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
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  constructor(private store: Store<AppState>) {
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

  onSearchClick(): void {}
}
