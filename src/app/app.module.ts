import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MundoPokemonComponent } from './pages/mundo-pokemon/mundo-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    MundoPokemonComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
