import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camara } from './camara';

@NgModule({
  declarations: [
    Camara,
  ],
  imports: [
    IonicPageModule.forChild(Camara),
  ],
  exports: [
    Camara
  ]
})
export class CamaraModule {}
