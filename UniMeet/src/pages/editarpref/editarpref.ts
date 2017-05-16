import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Preferencias} from '../preferencias/preferencias';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-editarpref',
  templateUrl: 'editarpref.html',
})
export class Editarpref {

food: FirebaseListObservable<any>;
music: FirebaseListObservable<any>; 
movies: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

   this.food = this.database.list('/Preferencias/Comida');
    this.music = this.database.list('/Preferencias/Musica');
    this.movies = this.database.list('/Preferencias/Pelicula');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editarpref');
  }

  GoToAceptar() {
    this.navCtrl.pop(Editarpref);
  }

}
