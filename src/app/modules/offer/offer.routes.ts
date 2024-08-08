import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferComponent } from './components/offer/offer.component';
import { OfferEditComponent } from './components/offer-edit/offer-edit.component';

const routes: Routes = [
  {
    path: ':offerId',
    children: [
      { path: '', component: OfferComponent },
      { path: 'edit', component: OfferEditComponent },
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
