// angular core
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPrice'
})
export class OrderByPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return value; }
    if (args !== false) {
      if (!args) { return value; }
    }

    value.sort((a, b) => {
      const valA = parseInt(a['price'] ? a['price'] : 0, 10);
      const valB = parseInt(b['price'] ? b['price'] : 0, 10);

      if (args) {
        if (valA < valB) {
          return -1;
        } else if (valA > valB) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (valA > valB) {
          return -1;
        } else if (valA < valB) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    return value;
  }

}
