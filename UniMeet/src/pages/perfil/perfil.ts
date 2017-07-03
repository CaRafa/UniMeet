import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Preferencias} from '../preferencias/preferencias';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import{ MisamigosPage} from '../misamigos/misamigos';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})


export class Perfil {

  usuario: FirebaseListObservable<any>; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

    this.usuario = this.database.list('/Usuario/1');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

    GoToPref() {
    this.navCtrl.push(Preferencias);
  }

    GoToAmis(){
 
    this.navCtrl.push(MisamigosPage);

    }



}
