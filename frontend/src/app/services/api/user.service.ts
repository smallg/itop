import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatSpinnerService } from '../../shared/modules/mat-spinner/mat-spinner.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
  constructor(private http: HttpClient, protected snackBar: MatSnackBar, protected router: Router, protected spinner: MatSpinnerService) {
    super(snackBar, router, spinner);
  }

  login(params) {
    return this.http.get(this.apiUrl + '/login', {params}).pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  getUsers() {
    return this.http.get(this.apiUrl + '/users').pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }
}
