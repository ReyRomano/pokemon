import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/interfaces/pokemon-response';
import { PokemonsService } from 'src/app/services/pokemons.service';

//import { ActivatedRoute, Router } from '@angular/router';
//import { PokemonResponse } from 'src/app/interfaces/pokemon-response';

@Component({
  selector: 'app-mis-pokemons',
  templateUrl: './mis-pokemons.component.html',
  styleUrls: ['./mis-pokemons.component.css']
})
export class MisPokemonsComponent implements OnInit {

  //Edito  ------------------------------
  public dato: any;

  public id: string = '';
  public orden: any = '';
  public experiencia: any;
  public peso: any;
  public altura: any;

  //public pokemonsColeccion: string[] = ["poke1", "poke2"];

  public pokemonCapturado = [{
    id: "",
    nombre: "",
    orden : "",
    experiencia : "",
    peso : "",
    altura : ""
  },
  //-------------  Inicio Mio:
  {
    id: "",
    nombre: "",
    orden : "",
    experiencia : "",
    peso : "",
    altura : ""
  },
  {
    id: "",
    nombre: "",
    orden : "",
    experiencia : "",
    peso : "",
    altura : ""
  }
  //-------------  Fin Mio
];

  //Fin Edito  ---------------------

  public texto: string = '';
  public pokemons:any;


  constructor( //private activatedRoute: ActivatedRoute, 
              private pokemonsService: PokemonsService
              //private router: Router 
              ) {

                //  ---------------  Inicio Edito  ------------
                this.dato = localStorage.getItem('texto');

                this.id = localStorage.getItem('id') || '';  //  DUDAAAAAA
                this.orden = localStorage.getItem('orden');
                this.experiencia = localStorage.getItem('experiencia');
                this.peso = localStorage.getItem('peso');
                this.altura = localStorage.getItem('altura');

                //--------------  Inicio Mio:
                //this.id = localStorage.getItem('id') || '';  //  DUDAAAAAA
                this.pokemonCapturado[1].id = localStorage.getItem('id2') || '';
                this.pokemonCapturado[1].nombre = localStorage.getItem('nombre2') || '';
                //this.orden = localStorage.getItem('orden');
                this.pokemonCapturado[1].orden = localStorage.getItem('orden2') || '';
                //this.experiencia = localStorage.getItem('experiencia');
                this.pokemonCapturado[1].experiencia = localStorage.getItem('experiencia2') || '';
                //this.peso = localStorage.getItem('peso');
                this.pokemonCapturado[1].peso = localStorage.getItem('peso2') || '';
                //this.altura = localStorage.getItem('altura');
                this.pokemonCapturado[1].altura = localStorage.getItem('altura2') || '';
                console.log("Objeto pokemonCapturado:", this.pokemonCapturado);
                //--------------  Fin Mio

                // this.pokemonCapturado = {
                //   orden : "orden",
                //   experiencia : "Milky Way",
                //   numberOfMoons : 1,
                //   weight : 100000
                // };

                this.pokemonCapturado[0].id = this.id;
                this.pokemonCapturado[0].nombre = this.dato;
                this.pokemonCapturado[0].orden = this.orden;
                this.pokemonCapturado[0].experiencia = this.experiencia;
                this.pokemonCapturado[0].peso = this.peso;
                this.pokemonCapturado[0].altura = this.altura;



                //AGREGANDO NUEVO POKEMON let nuevoPokemon = this.pokemonCapturado.push({id: "5", orden: "7", experiencia: "9", peso: "11", altura: "13"});
                // console.log("Con nuevo pokemon", this.pokemonCapturado);

                //localStorage.setItem('pokemones', JSON.stringify(this.pokemonCapturado));

                //  ---------------  Fin Edito  ------------

              }

  ngOnInit(): void {

    /*  this.activatedRoute.params.subscribe( params => {
      //console.log(params['texto']);

      this.texto = params['nombre'];  */
      
      // TODO: Llamar el servicio

    /*  this.pokemonsService.getCaracterisiticas( this.texto ).subscribe( pokemons => {
      //console.log(pokemons);
      this.pokemons = pokemons;
      //return this.texto;
      console.log("infoCaracteristicas ",pokemons);
    })  */

    //console.log("pokemonsColeccion: ", this.pokemonsColeccion);
    //console.log("PokemonCapturado: ", this.pokemonCapturado); 

    // this.planet1{
    //   name: string;
    //   galaxy: string;
    //   numberOfMoons: number;
    //   weight: number;
    // };

    //Object with properties
  // let planet = {
  //   name : "Earth",
  //   galaxy : "Milky Way",
  //   numberOfMoons : 1,
  //   weight : 100000
  // };
    
  }

  

  //  --------------  Inicio Edito  ----------------
  //Si tuviera q conseguir mis pokemons después:
  //capturandoMiPokemon( dato: string ) {
    
    //this.dato = localStorage.getItem('tutorial');  //Me la lleve al constructor para qse ejecute al iniciar éste compo

    //console.log("Poke capturado de LocalStorage:", this.dato);
  //}
  //  --------------  Fin edito  -----------

  }