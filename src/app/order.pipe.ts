import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any): any {
    if (value === null) {
      return value;
    }
    value.sort(function(a, b) {
      if (typeof a['release_date'] === 'undefined' || a['release_date'] === '') {
        return 1;
      }
      if (typeof b['release_date'] === 'undefined' || b['release_date'] === '') {
        return -1;
      }
      if (a['release_date'] < b['release_date']) {
        return -1;
      }
      if (a['release_date'] > b['release_date']) {
        return 1;
      }
      return 0;
    });
    return value;
  }
}
