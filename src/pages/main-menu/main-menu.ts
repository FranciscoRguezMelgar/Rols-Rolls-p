import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextsPage } from '../texts/texts'
import { RollsPage } from '../rolls/rolls'
import { GroupsPage } from '../groups/groups'

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-main-menu',
	templateUrl: 'main-menu.html',
})
export class MainMenuPage {
	public textsPage = TextsPage;
	public rollsPage = RollsPage;
	public groupsPage = GroupsPage;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MainMenuPage');
	}

}
