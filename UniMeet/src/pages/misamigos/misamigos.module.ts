import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisamigosPage } from './misamigos';

@NgModule({
  declarations: [
    MisamigosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisamigosPage),
  ],
  exports: [
    MisamigosPage
  ]
})
export class MisamigosPageModule {}
