import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-amigo',
  templateUrl: 'amigo.html',
})
export class AmigoPage {

  private amigo: any;
  user: FirebaseListObservable<any>;
  eliminaramigo: FirebaseObjectObservable<any>;
  nombreamigo: String;
  nombrefoto: String;
  llaveamigo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

        this.amigo = navParams.get('data');
        this.nombreamigo = this.amigo.Nombre;
        this.llaveamigo = this.amigo.$key;

        console.log(this.nombreamigo);

        this.eliminaramigo = this.database.object ('/amigos/1/'+this.llaveamigo);
        console.log(this.eliminaramigo);

        this.user = this.database.list('/Usuario/',
         {
      query: {
        orderByKey: true,
        equalTo: this.amigo.id
      }
       });

       if (this.amigo.id == 1){
      this.nombrefoto = "https://i.imgur.com/IoLkAfZ.jpg";
    }
    
    else if(this.amigo.id == 2){
      this.nombrefoto = "https://i.imgur.com/v5p60RI.png";
    }

    else if(this.amigo.id == 3){
      this.nombrefoto = "https://i.imgur.com/cSDQEJH.png";
    }

    else if(this.amigo.id == 4){
      this.nombrefoto = "https://i.imgur.com/xTYpxYd.png";
    }

    else if(this.amigo.id == 5){
      this.nombrefoto = "https://i.imgur.com/KwHJQw7.png";
    }

    else if(this.amigo.id == 6){
      this.nombrefoto = "https://i.imgur.com/wN5WMsv.jpg";
    }

    else if(this.amigo.id == 7){
      this.nombrefoto = "https://i.imgur.com/EKyQRno.jpg";
    }

    else if(this.amigo.id == 8){
      this.nombrefoto = "https://i.imgur.com/dgXVfQH.png";
    }

    console.log(this.llaveamigo);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigoPage');
  }

  
  Eliminar() {

    this.eliminaramigo.set({

        
      });
  }

}
