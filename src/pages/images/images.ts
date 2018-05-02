import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the ImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {

images: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public imagePicker: ImagePicker) {}

  getPictures(){ 
    this.imagePicker.getPictures({
    }).then( results =>{
      console.log(results);
      for(let i=0; i < results.length;i++){
        this.images.push(results[i]);
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');
    this.getPictures();
  }

}
