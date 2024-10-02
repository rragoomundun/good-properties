import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-home',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './search-home.component.html',
  styleUrl: './search-home.component.scss',
})
export class SearchHomeComponent {}
