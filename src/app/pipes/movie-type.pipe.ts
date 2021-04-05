import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieType'
})
export class MovieTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if (value === 'movie' || value === 'movies')
      return 'película';

    if (value === 'series')
      return 'serie';


    return value;
  }

}
