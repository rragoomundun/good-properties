import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferComponent } from './components/offer/offer.component';
import { OfferEditComponent } from './components/offer-edit/offer-edit.component';

import { loggedInGuard } from '../../core/guards/logged-in/logged-in.guard';

const routes: Routes = [
  {
    path: ':offerId',
    children: [
      { path: '', component: OfferComponent },
      {
        path: 'edit',
        component: OfferEditComponent,
        canActivate: [loggedInGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRoutes {}
