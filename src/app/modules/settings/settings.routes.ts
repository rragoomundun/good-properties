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
        data: { title: 'PAGES.SETTINGS.TABS.ACCOUNT.TITLE' },
      },
      {
        path: 'contact',
        component: SettingsContactComponent,
        data: { title: 'PAGES.SETTINGS.TABS.CONTACT.TITLE' },
      },
      {
        path: 'delete',
        component: SettingsDeleteComponent,
        data: { title: 'PAGES.SETTINGS.TABS.DELETE_ACCOUNT.TITLE' },
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
