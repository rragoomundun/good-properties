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
      },
      { path: '**', component: RegisterComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'password',
    children: [
      {
        path: 'forgotten',
        component: PasswordForgottenComponent,
      },
      {
        path: 'reset/:resetPasswordToken',
        component: ResetPasswordComponent,
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
