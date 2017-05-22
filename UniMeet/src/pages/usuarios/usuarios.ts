import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {Perfilamigo} from '../perfilamigo/perfilamigo';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class Usuarios {

  private categoria: any;
  private nombre: any;
  usuario: FirebaseListObservable<any>;
  key: any;
  amigo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

    this.categoria = navParams.get('json');
    this.nombre = this.categoria.Tipo;
    console.log(this.nombre);
    this.key = this.categoria.key;
    console.log(this.key);
    this.usuario = this.database.list('/PreferenciasUsuarios/'+this.key+'/'+this.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Usuarios');
  }

  IrAmigo(amigo){

    var myJSON = JSON.stringify(amigo);

    this.navCtrl.push(Perfilamigo,{json:amigo});

  }

}
