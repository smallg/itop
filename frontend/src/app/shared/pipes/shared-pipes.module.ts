import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDatePipe } from './calendar-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarDatePipe
  ],
  exports: [
    CalendarDatePipe
  ]
})
export class SharedPipesModule {
}
