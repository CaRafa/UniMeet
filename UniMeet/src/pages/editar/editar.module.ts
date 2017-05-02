import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Editar } from './editar';

@NgModule({
  declarations: [
    Editar,
  ],
  imports: [
    IonicPageModule.forChild(Editar),
  ],
  exports: [
    Editar
  ]
})
export class EditarModule {}
