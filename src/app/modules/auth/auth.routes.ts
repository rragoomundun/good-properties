import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordForgottenComponent } from './components/password-forgotten/password-forgotten.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'register',
    children: [
      {
        path: 'confirm/:confirmationToken',
        component: RegisterConfirmComponent,
        data: { title: 'PAGES.REGISTER_CONFIRM.TITLE' },
      },
      { path: '**', component: RegisterComponent, data: { title: 'REGISTER' } },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'LOGIN' },
  },
  {
    path: 'password',
    children: [
      {
        path: 'forgotten',
        component: PasswordForgottenComponent,
        data: { title: 'PAGES.PASSWORD_FORGOTTEN.TITLE' },
      },
      {
        path: 'reset/:resetPasswordToken',
        component: ResetPasswordComponent,
        data: { title: 'PAGES.RESET_PASSWORD.TITLE' },
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutes {}
