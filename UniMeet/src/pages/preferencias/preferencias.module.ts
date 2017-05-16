import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Preferencias } from './preferencias';

@NgModule({
  declarations: [
    Preferencias,
  ],
  imports: [
    IonicPageModule.forChild(Preferencias),
  ],
  exports: [
    Preferencias
  ]
})
export class PreferenciasModule {}
