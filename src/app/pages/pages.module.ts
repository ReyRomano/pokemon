import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundoPokemonComponent } from './mundo-pokemon/mundo-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MisPokemonsComponent } from './mis-pokemons/mis-pokemons.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    //MundoPokemonComponent,
    //PokemonComponent,
    MisPokemonsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
