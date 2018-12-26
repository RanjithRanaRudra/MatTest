import { SharedModule } from './../../Shared/shared.module';
import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    AuthenticationRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
