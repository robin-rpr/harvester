import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore:disable-next-line
import * as en_US from '../../../../../../i18n/en-US.i18n.json';


@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {
  transform(value: string): unknown {
    const language = 'en-US';

    switch (language) {
      case 'en-US': return en_US.default[value];
      default: return en_US.default[value];
    }
  }

}
