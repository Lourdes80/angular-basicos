import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  habiaNombre: boolean = true;

   borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
    if (this.heroeBorrado == ''){
      this.habiaNombre = false;
    }
    
    console.log(this.heroeBorrado);
    
  }

}
