import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipe implements PipeTransform {
  transform(value: string): string {
    // We don't want to worry about case-sensitive emails,
    // so we will lowercase them
    return value.toLowerCase();
  }
}
