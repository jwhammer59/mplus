import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone'})
export class CustomPhonePipe implements PipeTransform {
  transform(value: string): string {

    let area: string = value.slice(0,3);
    let number: string = value.slice(3);

    number = number.slice(0,3) + "-" + number.slice(3);

    return ("(" + area + ")" + " " + number);
  }
}