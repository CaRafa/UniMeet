import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Editarpref } from './editarpref';

@NgModule({
  declarations: [
    Editarpref,
  ],
  imports: [
    IonicPageModule.forChild(Editarpref),
  ],
  exports: [
    Editarpref
  ]
})
export class EditarprefModule {}
