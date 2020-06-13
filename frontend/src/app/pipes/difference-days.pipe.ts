import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'differenceDays',
})
export class DifferenceDaysPipe implements PipeTransform {
  transform(value: Date): string {
    let difference: Number;
    const dateCreated = moment(value);
    difference = moment(Date.now()).diff(dateCreated, 'days');
    if (difference < 1) {
      return `Hoy`;
    } else if (difference == 1) {
      return `${1} día`;
    } else if (difference >= 1 && difference <= 30) {
      return `${1} días`;
    } else if (difference >= 30 && difference <= 365) {
      return `${moment(Date.now()).diff(dateCreated, 'months')} meses`;
    } else if (difference > 365) {
      return `${moment(Date.now()).diff(dateCreated, 'years')} años`;
    }

    return `${difference} dias`;
  }
}
