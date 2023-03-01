import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available',
})
export class AvailablePipe implements PipeTransform {
  // f(w, arg1, arg2)
  // []
  transform(value: number, ...args: unknown[]): unknown {
    console.log(args);

    return value > 0 ? 'fa fa-check' : 'fa fa-times';
  }
}
