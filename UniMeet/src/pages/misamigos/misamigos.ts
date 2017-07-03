import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';


/**
 * Generated class for the MisamigosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-misamigos',
  templateUrl: 'misamigos.html',
})
export class MisamigosPage {

  amigos: FirebaseListObservable<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.amigos = this.database.list('/amigos/1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisamigosPage');
  }

}
