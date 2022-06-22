import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService){

  }



  agregar(){
    // event.preventDefault(); esto evita el refresh del formulario cuando se hace click en el botón sin haber puesto valores en los input. Es necesario pasar a la función "event: any"
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }  



    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);

    //    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };    
  }


}
