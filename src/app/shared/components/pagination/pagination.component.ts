import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() nbPages: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  get pages(): number[] {
    return Array.from(Array(this.nbPages).keys()).map((key) => key + 1);
  }

  get pagesEnd(): number[] {
    const start = this.nbPages - 3;
    const pagesArray = [];

    for (let i = start; i <= this.nbPages; i++) {
      pagesArray.push(i);
    }

    return pagesArray;
  }

  get pagesIn(): number[] {
    const start = this.page - 1;
    const end = this.page + 1;
    const pagesArray = [];

    for (let i = start; i <= end; i++) {
      pagesArray.push(i);
    }

    return pagesArray;
  }
}
