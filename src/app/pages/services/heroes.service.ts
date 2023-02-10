import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Modelo de datos
import {HeroeInterface} from '../../interfaces/heroe.interface';
// Operadores
import { map, delay } from 'rxjs/operators';
// URL API - BackEnd
import { endpoint } from '../../api/endpoint';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private url = endpoint.api;

  constructor(private http: HttpClient) { }

  // Consultar todos los súper héroes.
  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`).pipe(map( resp => this.crearArray(resp)),delay(500));
  }

  // Consultar súper héroe por id.
  getHeroeById(id:string){
    return this.http.get(`${this.url}/heroes/${id}.json`)
  }

  // Crear Heroe
  crearHeroe(heroe:HeroeInterface){
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(map( (resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  // Modificar un súper héroe
  actualizarHeroe(heroe:HeroeInterface){
    const heroeTemp = {...heroe}
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  // Eliminar un súper héroe
  borrarHeroe(id:string){
    return this.http.delete(`${this.url}/heroes/${id}.json`)
  }

  private crearArray( heroesObj: any ){
    const heroes: HeroeInterface[]=[];
    if(heroesObj === null){
      return [];
    }

    Object.keys(heroesObj).forEach( key => {
      const heroe: HeroeInterface = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }

}
