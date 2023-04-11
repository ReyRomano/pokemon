import { Component, OnInit } from '@angular/core';
//import { Ability } from 'src/app/interfaces/pokemon-response';
import { Gold, PokemonBase, Type } from '../../interfaces/pokemon-response';
import { PokemonsService } from '../../services/pokemons.service';
import { Ability } from 'src/app/interfaces/pokemon-response';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mundo-pokemon',
  templateUrl: './mundo-pokemon.component.html',
  styleUrls: ['./mundo-pokemon.component.css']
})
export class MundoPokemonComponent implements OnInit {

  public abilitys: Ability[] = []
  //pokemonsService: any;

  //public pokemon: Ability[] = []

  public pokemons:any;



  constructor( private PokemonsService: PokemonsService, private Activatedrouter: ActivatedRoute ) {}

  ngOnInit(): void {
    this.pokemons = [];

    this.PokemonsService.getPokemon()
    // .subscribe( (resp: PokemonResponse) => {  //Llamo 'subscribe' para disparar la funcion hhtp de un observable 
    .subscribe( (resp:any) => {

      resp.results.forEach((element:any) => {
      //console.log("resultado de API",element.name);

      this.PokemonsService.getCaracterisiticas(element.name)
      .subscribe( (resp:any) => {

        this.pokemons.push({name: element.name, tipo: resp.types, habilidad: resp.abilities})

      }
      )
      

        
      });

      console.log("resultado de API",this.pokemons);

      
      //this.pokemons=resp.results;
      //this.abilitys = resp.abilities;
    
  }) 

  this.Activatedrouter.params.subscribe( params => {
    console.log(params);
  
    /*this.pokemonsService.buscarPokemons( params['texto'] ).subscribe( (pokemons: any) => {
      console.log(pokemons);
    })*/


  })

}

buscarHabilidad( texto: string ) {

  texto = texto.trim();  //Borra espacios delante y detras
  if (texto.length === 0){
    return;
  }
  console.log(texto);

  //this.router.navigate(['/pokemon', texto ]);
}


}
