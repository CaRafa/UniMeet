import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perfilamigo } from './perfilamigo';

@NgModule({
  declarations: [
    Perfilamigo,
  ],
  imports: [
    IonicPageModule.forChild(Perfilamigo),
  ],
  exports: [
    Perfilamigo
  ]
})
export class PerfilamigoModule {}
