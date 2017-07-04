import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmigoPage } from './amigo';

@NgModule({
  declarations: [
    AmigoPage,
  ],
  imports: [
    IonicPageModule.forChild(AmigoPage),
  ],
  exports: [
    AmigoPage
  ]
})
export class AmigoPageModule {}
