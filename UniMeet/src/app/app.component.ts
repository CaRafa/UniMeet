import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { ListPage } from '../pages/list/list';
import { Inicio } from '../pages/inicio/inicio';
import { Perfil } from '../pages/perfil/perfil';
import { Buscar } from '../pages/buscar/buscar';
import {Camara} from '../pages/camara/camara';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Inicio;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: Perfil },
      { title: 'Buscar', component: Buscar }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const firebaseConfig = {
          apiKey: "AIzaSyBsJbp7Vq6QxIY5mXv20sBEecwKKebrJD8",
          authDomain: "unimeet-e0784.firebaseapp.com",
          databaseURL: "https://unimeet-e0784.firebaseio.com",
          projectId: "unimeet-e0784",
          storageBucket: "unimeet-e0784.appspot.com",
          messagingSenderId: "229117696046"
      };
      firebase.initializeApp(firebaseConfig);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
