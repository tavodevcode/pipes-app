import { Pipe, PipeTransform } from '@angular/core';
import { CanFly } from '../interfaces/table.type';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): CanFly {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
