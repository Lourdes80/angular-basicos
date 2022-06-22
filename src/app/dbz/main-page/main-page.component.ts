import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  
  //public get personajes(): Personaje[] {
  //  return this.DbzService.personajes;
  //}

  nuevo: Personaje = {
    nombre: 'Maestro',
    poder: 1000
  }

  //agregarNuevoPersonaje( argumento: Personaje){
  //  this.personajes.push(argumento);
  //}

  constructor() {}
}
