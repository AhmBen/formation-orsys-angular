import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'civility'
})
export class CivilityPipe implements PipeTransform {

  transform(name: string, lang = 'fr'): string {
    const labels = {
      fr: 'Monsieur ',
      es: 'Señor '
    };
    return labels[lang] + name ;
  }

}
