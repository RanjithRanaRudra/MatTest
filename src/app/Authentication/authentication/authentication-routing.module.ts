import { SharedModule } from './../../Shared/shared.module';
import { MaterialModule } from './../../material/material.module';
import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
