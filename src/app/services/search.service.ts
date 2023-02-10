import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

searchHeroe( search: string, acciones: any[] ){
  search = search.toLocaleLowerCase() || '';
  return acciones.filter((item) => item.nombre.toLocaleLowerCase().indexOf(search) > -1 || item.poder.toLocaleLowerCase().indexOf(search) > -1);
}

}
