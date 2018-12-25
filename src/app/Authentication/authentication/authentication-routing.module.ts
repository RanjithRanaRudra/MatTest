import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';
import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
