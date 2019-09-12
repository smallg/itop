import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSpinnerComponent } from './component/mat-spinner.component';
import { MatSpinnerService } from './mat-spinner.service';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MatSpinnerComponent],
  exports: [MatSpinnerComponent]
})
export class MatSpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatSpinnerModule,
      providers: [MatSpinnerService]
    };
  }
}
