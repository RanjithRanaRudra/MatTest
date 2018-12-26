import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule {}

