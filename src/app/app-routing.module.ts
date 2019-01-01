import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { SharedModule } from './Shared/shared.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Authentication', loadChildren: './Authentication/authentication/authentication.module#AuthenticationModule'},
  {path: 'owner', loadChildren: './owner/owner/owner.module#OwnerModule'},
  {path: '', redirectTo: 'Authentication', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '500', component: ServerErrorComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
