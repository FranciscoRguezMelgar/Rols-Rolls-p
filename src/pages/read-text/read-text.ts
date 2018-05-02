import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Text } from '../../model/Text'
import { TextsPage } from '../texts/texts'


/**
 * Generated class for the ReadTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-text',
  templateUrl: 'read-text.html',
})
export class ReadTextPage {

  public textsPage = TextsPage;
  public text: Text;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.text = this.navParams.get('texto')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadTextPage');
  }

}
