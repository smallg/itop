import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'calendarDate'
})
export class CalendarDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    moment.updateLocale('en', {
      calendar: {
        lastDay: '[Yesterday] LT',
        sameDay: '[Today] LT',
        nextDay: '[Tomorrow] LT',
        lastWeek: 'LT, LL',
        nextWeek: 'LT, LL',
        sameElse: 'LT, LL'
      }
    });
    if (value) {
      return moment(value, 'YYYY-MM-DD HH:mm:ssZZ').calendar();
    } else {
      return '';
    }
  }

}
