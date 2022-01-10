import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-agregar-personaje',
	templateUrl: './agregar-personaje.component.html',
	styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
	@Input() nuevo:Personaje = {
		nombre: '',
		poder: 0
	}

	constructor(private dbzService: DbzService) {}
	
	add() {
		if(this.nuevo.nombre.trim().length === 0) return;

		this.dbzService.agregarPersonaje(this.nuevo);

		this.nuevo = {
			nombre: '',
			poder: 0
		};
	}
}
