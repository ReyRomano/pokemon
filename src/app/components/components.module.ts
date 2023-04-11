import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ShowComponent,
    PokemonGridComponent
  ],
  exports: [
    NavbarComponent,
    ShowComponent,
    PokemonGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
