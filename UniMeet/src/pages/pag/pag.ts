import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';


@IonicPage()
@Component({
  selector: 'page-pag',
  templateUrl: 'pag.html',
})
export class Pag {

  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    this.sizeSubject = new Subject();
    this.items = db.list('/items', {
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    });
  }

  filterBy (size: string) {
    this.sizeSubject.next(size);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pag');
  }

}
