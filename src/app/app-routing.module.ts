import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MundoPokemonComponent } from './pages/mundo-pokemon/mundo-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { MisPokemonsComponent } from './pages/mis-pokemons/mis-pokemons.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'mundoPokemon',
    component: MundoPokemonComponent
  },
  {
    path: 'pokemon/:nombre',
    component: PokemonComponent
  },
  {
    path: 'misPokemons',  //path: 'misPokemons/:texto',
    component: MisPokemonsComponent
  },
  {
    path: '**',
    redirectTo: '/mundoPokemon'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
