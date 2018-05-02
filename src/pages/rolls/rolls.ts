import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'



import { Roll } from '../../model/Roll'
/**
 * Generated class for the RollsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-rolls',
	templateUrl: 'rolls.html',
})
export class RollsPage {
	public rolls: Array<Roll>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public psc:PersistComp) {
		if (!this.psc.currentGroup.rolls){
			this.psc.currentGroup.rolls = [] as Array<Roll>;
		}
	}
	roll(){
		//Ahora lo vemos que esto es un poco diferente
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad RollsPage');
	}

}
