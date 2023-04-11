import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from "rxjs";
import { PokemonResponse } from '../interfaces/pokemon-response';
import { MundoPokemonComponent } from '../pages/mundo-pokemon/mundo-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor( private http: HttpClient) { }

  getPokemon():Observable<PokemonResponse> {

    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon');  //Endpoint aqui
    //  return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');  //Endpoint aqui
  }

  /*buscarPokemons(texto: string ):Observable<PokemonResponse[]> {

    return this.http.get<PokemonResponse[]>('https://pokeapi.co/api/v2/pokemon/ditto');  //Endpoint aqui
    //  return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');  //Endpoint aqui
  } */

  getCaracterisiticas(nombre: string) {

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  }

}
