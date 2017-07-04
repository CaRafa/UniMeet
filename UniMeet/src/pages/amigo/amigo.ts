import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';

/**
 * Generated class for the AmigoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-amigo',
  templateUrl: 'amigo.html',
})
export class AmigoPage {

  private amigo: any;
  user: FirebaseListObservable<any>;
  private nombreamigo: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

        this.amigo = navParams.get('data');
        this.nombreamigo = this.amigo.Nombre;
        this.user = this.database.list('/Usuario/',
         {
      query: {
        orderByKey: true,
        equalTo: this.amigo.id
      }
       });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigoPage');
  }

}
