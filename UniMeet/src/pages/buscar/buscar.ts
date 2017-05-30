import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {Usuarios} from '../usuarios/usuarios';
@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class Buscar {

  categoria: any;
  comida: FirebaseListObservable<any>;
  musica: FirebaseListObservable<any>;
  peliculas: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {

  this.comida = this.db.list('/Preferencias/Comida'); 
  this.musica = this.db.list('/Preferencias/Musica');   
  this.peliculas = this.db.list('/Preferencias/Pelicula');
  
  } 


  ionViewDidLoad() {
    console.log('ionViewDidLoad Buscar');
  }

  buscar(categoria){

    var myJSON = JSON.stringify(categoria);

    this.navCtrl.push(Usuarios,{json:categoria});
  }

}
