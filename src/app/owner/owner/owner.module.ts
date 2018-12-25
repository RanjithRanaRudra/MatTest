import { OwnerListComponent } from './../owner-list/owner-list.component';
import { OwnerDetailsComponent } from './../owner-details/owner-details.component';
import { OwnerCreateComponent } from './../owner-create/owner-create.component';
import { MaterialModule } from './../../material/material.module';
import { SidenavListComponent } from './../../Navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './../../Navigation/header/header.component';
import { LayoutComponent } from './../../layout/layout.component';
import { SharedModule } from './../../Shared/shared.module';
import { OwnerComponent } from './../owner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';

@NgModule({
  declarations: [
    OwnerComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    OwnerCreateComponent,
    OwnerDetailsComponent,
    OwnerListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class OwnerModule { }
