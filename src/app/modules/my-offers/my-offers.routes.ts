import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyOffersComponent } from './components/my-offers/my-offers.component';

const routes: Routes = [
  {
    path: '',
    component: MyOffersComponent,
    data: { title: 'PAGES.MY_OFFERS.TITLE' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOffersRoutes {}
