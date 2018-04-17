import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Group } from "../model/Group"

@Injectable()
export class PersistComp{
	public groups: Array<Group>;
	public ready:boolean = false;

	constructor(public str:Storage){
		//Indicamos que el módulo de almacenamiento ya está encendido
		this.str.ready().then(
			(readyness) => {
				this.str.get("groups").then(
					(value)=>{
						this.groups = value;
						if(value === null || value===undefined)
							this.groups = [];
					}
				)
			}
		);
	}
	clear(){
		this.str.clear().then((a)=>{console.log("Todos los grupos eliminados")});
		this.groups = [];
	}



}