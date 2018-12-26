import { SharedModule } from './Shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Authentication', loadChildren: './Authentication/authentication/authentication.module#AuthenticationModule'},
  {path: 'owner', loadChildren: './owner/owner/owner.module#OwnerModule'},
  {path: '', redirectTo: 'Authentication', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
