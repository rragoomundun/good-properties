import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchFormComponent } from '../search-form/search-form.component';
import { SearchHomeComponent } from '../search-home/search-home.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchFormComponent, SearchHomeComponent, SearchResultsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  get displaySearchResults(): boolean {
    const { queryParams } = this.activatedRoute.snapshot;

    return (
      queryParams['type_of_good'] &&
      queryParams['transaction_type'] &&
      queryParams['city_ids']
    );
  }
}
