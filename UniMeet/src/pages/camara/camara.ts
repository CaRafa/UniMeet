import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
/**
 * Generated class for the Camara page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
})
export class Camara {

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Camara');
  }
  captureDataUrl: string;
  alertCtrl: AlertController;
 capture (){
    const options: CameraOptions = {
  quality: 50,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
};
 this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
     this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
 }
 showSuccesfulUploadAlert() {
    const alert = this.alertCtrl.create({
      title: 'Listo!',
      subTitle: 'Ya tu foto se subio a Firebase (mas no a tu perfil)',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }
 upload (){
   const storageRef = firebase.storage().ref();
   //aqui hacemos que el nombre del archivo sea un timestamp
   const filename = Math.floor(Date.now() / 1000);
   //hacemos la referencia en firebase
   const imageRef = storageRef.child('images/'+filename+'.jpg');
   imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=>{
     //se subioooooo
     this.showSuccesfulUploadAlert();
   });
 }
 


  

}
