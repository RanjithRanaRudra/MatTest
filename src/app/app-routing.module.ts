import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Authentication', loadChildren: './Authentication/authentication/authentication.module#AuthenticationModule'},
  {path: '', redirectTo: 'Authentication', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
