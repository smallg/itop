import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedPipesModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    SharedPipesModule
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
