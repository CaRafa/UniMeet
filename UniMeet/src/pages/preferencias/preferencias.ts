import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Editarpref} from '../editarpref/editarpref';
import {Camara} from '../camara/camara';

@IonicPage()
@Component({
  selector: 'page-preferencias',
  templateUrl: 'preferencias.html',
})
export class Preferencias {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Preferencias');
  }

  GoToEditarpref(){
     this.navCtrl.push(Editarpref);
  }
  GoToCamara(){
     this.navCtrl.push(Camara);
  }

}
