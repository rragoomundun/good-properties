import { Routes } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';

import { loggedInGuard } from './core/guards/logged-in/logged-in.guard';
import { loggedOutGuard } from './core/guards/logged-out/logged-out.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'offer',
    loadChildren: () =>
      import('./modules/offer/offer.module').then((m) => m.OfferModule),
  },
  {
    path: 'new-offer',
    loadChildren: () =>
      import('./modules/new-offer/new-offer.module').then(
        (m) => m.NewOfferModule,
      ),
    canActivate: [loggedInGuard],
  },
  {
    path: 'my-offers',
    loadChildren: () =>
      import('./modules/my-offers/my-offers.module').then(
        (m) => m.MyOffersModule,
      ),
    canActivate: [loggedInGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
    canActivate: [loggedInGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [loggedOutGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
