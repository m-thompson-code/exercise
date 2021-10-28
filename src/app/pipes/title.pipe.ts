import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    // TODO: Update this code to uppercase the first letter of each word in the title
    // "la la land" => "La La Land"
    return value;
  }
}
