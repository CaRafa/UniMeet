import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buscar } from './buscar';

@NgModule({
  declarations: [
    Buscar,
  ],
  imports: [
    IonicPageModule.forChild(Buscar),
  ],
  exports: [
    Buscar
  ]
})
export class BuscarModule {}
