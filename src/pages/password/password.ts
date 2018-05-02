import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PersistComp } from "../../logic/PersistComp"

import { Group } from "../../model/Group"

import { MainMenuPage } from '../main-menu/main-menu';

import { GroupsPage } from '../groups/groups';


/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  public pass:string
  public group:Group
  public iteracion:number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp, public ts:ToastController) {

	var group:Group = this.navParams.get('group');


  }

  comprobarPass(){
  var group:Group = this.navParams.get('group');   
  if(this.pass === group.password){
  this.psc.currentGroup = group;
	this.psc.currentGroupSus = 
  	this.psc.groupsRef$.snapshotChanges().map(
			list => {
				list.filter(el => el.key === group.key).map(
					element => {
						console.log("Ha habido cambios en el grupo y ha saltado el subscribe")
						this.psc.currentGroup = { key: element, ...element.payload.val() } as Group;
            if(this.psc.currentGroup.members.indexOf(this.psc.thisPlayer) === -1){
              var i:number;
              var encontrado:boolean = false;
              console.log(this.psc.thisPlayer.uid)
              for(i = 0; i < this.psc.currentGroup.members.length; i++){
                 console.log(this.psc.currentGroup.members[i].uid)
                 if(this.psc.thisPlayer.uid.match(this.psc.currentGroup.members[i].uid)){
                   console.log("encontrado")
                   encontrado = true;
                 }
              }
                /*if(this.iteracion === 1){
                    console.log("primera iteracion del suscribe")
                    this.iteracion = 0;
                }else */
                if(!encontrado){
                   console.log("te han echado del grupo")
                   this.iteracion = 1;
                   this.navCtrl.setRoot(GroupsPage)
                }
               
            }
					}
				)
		}).subscribe();

	this.navCtrl.setRoot(MainMenuPage)
  }else{
  	let toast = this.ts.create({
		message: 'Ha habido un error',
		duration: 3000,
		position: 'middle',
		});
		toast.present()
		return;
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

}
