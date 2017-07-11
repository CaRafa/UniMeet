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
      this.nombrefoto = "/assets/images/victoria.jpg";
    }
    
    else if(this.key == 2){
      this.nombrefoto = "/assets/images/rocco.png";
    }

    else if(this.key == 3){
      this.nombrefoto = "/assets/images/rafa.png";
    }

    else if(this.key == 4){
      this.nombrefoto = "/assets/images/maria.png";
    }

    else if(this.key == 5){
      this.nombrefoto = "/assets/images/pablo.png";
    }

    else if(this.key == 6){
      this.nombrefoto = "/assets/images/veronica.jpg";
    }

    else if(this.key == 7){
      this.nombrefoto = "/assets/images/daniel.jpg";
    }

    else if(this.key == 8){
      this.nombrefoto = "/assets/images/carla.png";
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
