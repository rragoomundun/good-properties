import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SelectComponent } from '../../../../shared/components/select/select.component';
import { InputMinMaxComponent } from '../../../../shared/components/input-min-max/input-min-max.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    SelectComponent,
    InputMinMaxComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      transactionType: new FormControl('to-rent', [Validators.required]),
      typeOfGood: new FormControl('house', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      minPrice: new FormControl(null),
      maxPrice: new FormControl(null),
      minSquareMeters: new FormControl(null),
      maxSquareMeters: new FormControl(null),
      nbRooms: new FormControl(null),
      nbBedrooms: new FormControl(null),
      features: new FormArray([]),
    });
  }
}
