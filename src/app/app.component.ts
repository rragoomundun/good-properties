import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Status } from './shared/enums/status.enum';

import { AppState } from './store/app.store';

import * as UserActions from './shared/store/user/actions';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { TranslationService } from './shared/services/translation/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userStatus$: Observable<Status>;

  userStatus: Status;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private titleService: Title,
    private translationService: TranslationService,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';

          while (route!.firstChild) {
            route = route.firstChild;
          }

          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }

          return routeTitle;
        }),
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(
            `${this.translationService.instant(title)} - ${this.translationService.instant('TITLE')}`,
          );
        }
      });

    this.store.dispatch(UserActions.getCurrentUser());
  }
}
