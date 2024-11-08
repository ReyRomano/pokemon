import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
//import { Ability } from 'src/app/interfaces/pokemon-response';
import { PokemonResponse } from '../../interfaces/pokemon-response';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  public texto: string = '';  //Nombre de pokemon

  //Mio:  Pokemon # 2
  //public texto2: string = '';
  public texto2: any = '';


  public pokemons:any; 

  public tipo: string = '';
  public habilidad: string = '';
  public orden: string = '';
  //public experiencia: string = '';
  public peso: string = '';
  public altura: string = '';

  //public order= this.pokemons?.order

//  public pokemon: Ability[] = []

  constructor( private activatedRoute: ActivatedRoute, 
              private pokemonsService: PokemonsService,
              private router: Router ) {}

  ngOnInit(): void {

    //Lim´piar el LocalStorage: localStorage.removeItem('poke2');

    this.activatedRoute.params.subscribe( params => {
      //console.log("params: ", params['texto']);

      this.texto = params['nombre'];

      //Inicio Mio:
      // this.texto2 = params['nombre']
      // console.log("texto2: ", this.texto2);
      //Fin Mio

      console.log("texto: ", this.texto);
      
      // TODO: Llamar el servicio

    this.pokemonsService.getCaracterisiticas( this.texto ).subscribe( pokemons => {
      //console.log(pokemons);
      this.pokemons = pokemons;
      console.log("infoCaracteristicas ",pokemons);

      //Guardando Item en var publica y después en localStorage
      this.orden = this.pokemons.order;
      //console.log("Orden: ",this.orden);
      localStorage.setItem('orden', this.orden);
      this.peso = this.pokemons.weight;
      //console.log("Peso: ",this.peso);
      localStorage.setItem('peso', this.peso);

      //Aquí no necesito guardar variable, sólo Item en localStorage
      localStorage.setItem('id', this.pokemons.id);
      localStorage.setItem('experiencia', this.pokemons.base_experience);
      localStorage.setItem('altura', this.pokemons.height);  
      localStorage.setItem('texto', this.texto);

          /*  //  -----------  Inicio mio:  ---------          
          this.orden= this.pokemons?.order;
          console.log("Orden:", this.orden );
          //localStorage.setItem('order', order);

          this.experiencia = this.pokemons?.base_experience;
          console.log("experiencia:", this.experiencia);

          this.altura = this.pokemons.height;
          console.log("Altura:", this.altura);

          this.peso = this.pokemons.weight;
          console.log("Peso:", this.peso);

          this.nombreMio = this.pokemons.name;
          console.log("nombreMio:", this.nombreMio);
          //  -------  Termina Mio  ----------  */
    })

    })
    
  }

  capturarPokemon( texto: string) {

    texto = texto.trim();

    if ( texto.length === 0 ) {
      return;
    }

    this.router.navigate(['/misPokemons']);

    console.log("pokemon capturado:", texto);
  }
  
  //  -------------------  Inicio Edito  ---------------
  capturarPokemon2(texto2: any ) {

    texto2 = this.pokemons;
    
    if (texto2.length === 0 ){
      return;
    }

    this.router.navigate(['/misPokemons']);

    console.log("Info pokemon2 capturado: ", texto2);


    //  --------  Inicio Mio
    localStorage.setItem('id2', texto2.id);
    localStorage.setItem('nombre2', texto2.name);
    localStorage.setItem('orden2', texto2.order);
    localStorage.setItem('experiencia2', texto2.base_experience);
    localStorage.setItem('peso2', texto2.weight);
    localStorage.setItem('altura2', texto2.height);
    //  --------  Fin Mio


  }
  //  -------------------  Fin Edito  ---------------
}

