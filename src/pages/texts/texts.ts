import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { Text } from '../../model/Text'
//import { Observable } from 'rxjs/Observable'
//import { Subscription } from 'rxjs/Subscription'
/**
 * Generated class for the TextsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-texts',
	templateUrl: 'texts.html',
})
export class TextsPage {
	public textos: Array<Text>;
	public texts$;
	constructor(public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
	}
	ionViewDidLoad() {
		this.texts$ = this.psc.currentGroup.texts;
		var i: number;
		for(i = 0; i < this.texts$.length; i++){
			if(this.texts$[i].visible){
				this.textos.push(this.texts$[i]);
			}
		}
		this.texts$ = this.textos;
		console.log('ionViewDidLoad TextsPage');
	}

}