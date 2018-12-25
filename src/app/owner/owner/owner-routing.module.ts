import { OwnerCreateComponent } from './../owner-create/owner-create.component';
import { OwnerDetailsComponent } from './../owner-details/owner-details.component';
import { OwnerListComponent } from './../owner-list/owner-list.component';
import { OwnerComponent } from './../owner.component';
import { SharedModule } from './../../Shared/shared.module';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: OwnerComponent, children: [
    {path: 'owners', component: OwnerListComponent},
    {path: 'details/:id', component: OwnerDetailsComponent},
    {path: 'create', component: OwnerCreateComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
