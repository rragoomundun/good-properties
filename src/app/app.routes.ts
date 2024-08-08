import { Routes } from '@angular/router';

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
  },
  {
    path: 'my-offers',
    loadChildren: () =>
      import('./modules/my-offers/my-offers.module').then(
        (m) => m.MyOffersModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];
