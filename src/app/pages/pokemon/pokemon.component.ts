import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
//import { Ability } from 'src/app/interfaces/pokemon-response';
import { PokemonResponse } from '../../interfaces/pokemon-response';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  public texto: string = '';
  public pokemons:any;

//  public pokemon: Ability[] = []

  constructor( private activatedRoute: ActivatedRoute, 
              private pokemonsService: PokemonsService) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      //console.log(params['texto']);

      this.texto = params['nombre'];
      
      // TODO: Llamar el servicio

    this.pokemonsService.getCaracterisiticas( this.texto ).subscribe( pokemons => {
      //console.log(pokemons);
      this.pokemons = pokemons;
      console.log("infoCaracteristicas ",pokemons);
    })

    })
    
  }

}
