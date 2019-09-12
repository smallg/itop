import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSpinnerService } from '../mat-spinner.service';

@Component({
  selector: 'app-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['./mat-spinner.component.scss']
})
export class MatSpinnerComponent implements OnInit, OnDestroy {
  showSpinner = false;
  spinnerSubscription: Subscription;

  constructor(public spinnerService: MatSpinnerService) {
  }

  ngOnInit() {
    this.spinnerSubscription = this.spinnerService.spinnerObservable.subscribe(
      isShow => (this.showSpinner = isShow)
    );
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}
