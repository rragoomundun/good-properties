import { Component } from '@angular/core';

import { SearchFormComponent } from '../search-form/search-form.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
