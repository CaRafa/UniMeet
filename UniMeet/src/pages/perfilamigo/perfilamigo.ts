import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-perfilamigo',
  templateUrl: 'perfilamigo.html',
})
export class Perfilamigo {

  private amigo: any;
  private key: any;
  nombreamigo: string;
  user: FirebaseListObservable<any>;
  useramigo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.amigo = navParams.get('json');
    this.key = this.amigo.$key;
    this.nombreamigo = this.amigo.usuario;
    this.user = this.database.list('/Usuario/',
    {
      query: {
        orderByKey: true,
        equalTo: this.key
      }
    });
    console.log(this.key);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfilamigo');
  }



}
