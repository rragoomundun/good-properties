import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TranslateModule } from '@ngx-translate/core';

import { AppState } from '../../../store/app.store';

import { selectUser } from '../../../shared/store/user/selectors';

import { User } from '../../../shared/models/User.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user$: Observable<User | null>;

  user: User | null;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(selectUser);

    this.user$.subscribe((user) => (this.user = user));
  }
}
