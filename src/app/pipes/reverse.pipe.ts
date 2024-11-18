import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,

  // This pipe is pure, meaning that it will not be re-evaluated on every change detection cycle if its input has not changed.
  pure: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
