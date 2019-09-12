import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatSpinnerService } from '../../shared/modules/mat-spinner/mat-spinner.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl = environment.apiUrl;

  constructor(protected snackBar: MatSnackBar, protected router: Router, protected spinner: MatSpinnerService) {
    const hostname = window.location.hostname;

  }

  protected handleError(error: any) {
    this.spinner.hide();
    this.showErrorMsg(error.statusText);
    return throwError(error || 'backend server error');
  }

  protected checkResponse(response: any) {
    return response;
  }

  private showErrorMsg(err) {
    this.snackBar.open(err.toString(), '', {duration: 3000});
  }
}
