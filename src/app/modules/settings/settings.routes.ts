import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './components/settings/settings.component';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsContactComponent } from './components/settings-contact/settings-contact.component';
import { SettingsDeleteComponent } from './components/settings-delete/settings-delete.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'account',
        component: SettingsAccountComponent,
      },
      {
        path: 'contact',
        component: SettingsContactComponent,
      },
      {
        path: 'delete',
        component: SettingsDeleteComponent,
      },
      {
        path: '**',
        redirectTo: '/settings/account',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutes {}
