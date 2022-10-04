import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador App';
  numero:number = 10;
  base:number = 5;
  heroes:string[] =  ['Ironman','Spiderman','Hulk'];
  heroeBorrado:string='';

  
  
borrarHeroe(indice: number):void {
console.log("Borrando..." + indice)
this.heroeBorrado = this.heroes.shift() || '';


}

}
