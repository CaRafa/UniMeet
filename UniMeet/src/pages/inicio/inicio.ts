import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Perfil} from '../perfil/perfil';
import {Pag} from '../pag/pag';



@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
  }

  IrPerfil(){
  this.navCtrl.push(Perfil);
  }

 Ir(){
  this.navCtrl.push(Pag);
  }


}
