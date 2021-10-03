import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'na'): Heroe[] {

    if(orderBy === 'na'){
      return heroes;
    }else if(orderBy === 'nombre'){
      return heroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1);
    }else if(orderBy === 'vuela'){
      return heroes.sort( (a, b) => (a.vuela < b.vuela) ? 1 : -1); //*ASC
    }else if(orderBy === 'color'){
      return heroes.sort( (a, b) => (a.color > b.color) ? 1 : -1);
    }else{
      return [];
    }
  }

}
