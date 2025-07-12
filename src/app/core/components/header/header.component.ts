import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TranslateModule } from '@ngx-translate/core';

import { AppState } from '../../../store/app.store';

import { selectUser } from '../../../shared/store/user/selectors';

import * as AuthActions from '../../../modules/auth/store/actions';

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

  hideHamburgerMenu(): void {
    const navbarTogglerEl = <HTMLButtonElement>(
      document.querySelector('.navbar-toggler')
    );

    if (navbarTogglerEl && window.innerWidth < 992) {
      navbarTogglerEl.click();
    }
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: any): void {
    const header = document.querySelector('header');
    const navbarTogglerEl = document.querySelector(
      '.navbar-collapse.collapse.show',
    );

    if (header?.contains(event.target) === false && navbarTogglerEl) {
      this.hideHamburgerMenu();
    }
  }

  onLogoutClick() {
    this.store.dispatch(AuthActions.logout({ delay: 0 }));
  }
}
