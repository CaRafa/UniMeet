import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pag } from './pag';

@NgModule({
  declarations: [
    Pag,
  ],
  imports: [
    IonicPageModule.forChild(Pag),
  ],
  exports: [
    Pag
  ]
})
export class PagModule {}
