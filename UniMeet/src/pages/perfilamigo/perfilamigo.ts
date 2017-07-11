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
  nombrefoto: string;
  user: FirebaseListObservable<any>;
  amigos: FirebaseListObservable<any>;
  useramigo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.amigo = navParams.get('json');
    this.key = this.amigo.$key;
    this.nombreamigo = this.amigo.usuario;
    this.amigos = this.database.list('/amigos/1');
    this.user = this.database.list('/Usuario/',
    {
      query: {
        orderByKey: true,
        equalTo: this.key
      }
    });

    if (this.key == 1){
      this.nombrefoto = "https://i.imgur.com/IoLkAfZ.jpg";
    }
    
    else if(this.key == 2){
      this.nombrefoto = "https://i.imgur.com/v5p60RI.png";
    }

    else if(this.key == 3){
      this.nombrefoto = "https://i.imgur.com/cSDQEJH.png";
    }

    else if(this.key == 4){
      this.nombrefoto = "https://i.imgur.com/xTYpxYd.png";
    }

    else if(this.key == 5){
      this.nombrefoto = "https://i.imgur.com/KwHJQw7.png";
    }

    else if(this.key == 6){
      this.nombrefoto = "https://i.imgur.com/wN5WMsv.jpg";
    }

    else if(this.key == 7){
      this.nombrefoto = "https://i.imgur.com/EKyQRno.jpg";
    }

    else if(this.key == 8){
      this.nombrefoto = "https://i.imgur.com/dgXVfQH.png";
    }


    console.log(this.key);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfilamigo');
  }
  
  AddFriend(user){


      this.amigos.push({
        Nombre: user.Nombre,
        id: user.$key
      });



  }




}
