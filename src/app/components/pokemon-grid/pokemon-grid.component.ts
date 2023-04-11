import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Ability, PokemonResponse } from 'src/app/interfaces/pokemon-response';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {

  @Input() abilitys: Ability[] | undefined;

  public texto: string = '';
  public pokemons: PokemonResponse[] = [];
  
  constructor( private ActivatedRoute: ActivatedRoute, 
    private PokemonsService: PokemonsService ) {}

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe( params => {
      //console.log(params['texto']);

      this.texto = params['texto'];
      // TODO: Llamar el servicio

    this.PokemonsService.getCaracterisiticas( params['texto'] ).subscribe( pokemons => {
      console.log("infocaracteristicas",pokemons);
      //this.pokemons = pokemons;
    })

    })
    
  }

}
