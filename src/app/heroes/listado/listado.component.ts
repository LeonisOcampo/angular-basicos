import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
	heroes: string[] =['Spiderman','IronMan','Hulk','Thor','Batman'];
	heroeBorrado: string = '';

	borrarHeroe() {
		// Elimino el primer elemento del array
		this.heroeBorrado = this.heroes.shift() || '';

		// Elimino el último elemento del array
		//this.heroes.pop();
	}
}
