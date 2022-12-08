import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../models/enums';

@Pipe({
  name: 'currencyEnumToString',
  pure: true,
})
export class CurrencyEnumToStringPipe implements PipeTransform {
  transform(value: Currency): string {
    return Currency[value];
  }
}
