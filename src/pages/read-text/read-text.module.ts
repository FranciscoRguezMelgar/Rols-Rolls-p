import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadTextPage } from './read-text';

@NgModule({
  declarations: [
    ReadTextPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadTextPage),
  ],
})
export class ReadTextPageModule {}
