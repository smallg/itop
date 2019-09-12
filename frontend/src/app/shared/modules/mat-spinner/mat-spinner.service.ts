import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MatSpinnerService {

    spinnerObservable;

    constructor() {
        this.spinnerObservable = new Subject();
    }

    show() {
        this.spinnerObservable.next(true);
    }

    hide() {
        this.spinnerObservable.next(false);
    }
}
