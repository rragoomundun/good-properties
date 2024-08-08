import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewOfferComponent } from './components/new-offer/new-offer.component';

const routes: Routes = [{ path: '', component: NewOfferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOfferRoutes {}
