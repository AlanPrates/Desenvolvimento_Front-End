import { Pipe, PipeTransform } from '@angular/core';
import { Aves } from '../aves.model';

@Pipe({
  name: 'filterSuinos'
})
export class FilterSuinosPipe implements PipeTransform {
  transform(aves: Aves[], filtroBrincoPai: string): Aves[] {
    if (!aves || !filtroBrincoPai) {
      return aves;
    }

    return aves.filter(ave =>
      ave.brincoPai.toString().toLowerCase().includes(filtroBrincoPai.toLowerCase())
    );
  }

}
