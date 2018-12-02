import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogoDetalhesPage } from './jogo-detalhes';

@NgModule({
  declarations: [
    JogoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(JogoDetalhesPage),
  ],
  /*  exports:[
    JogoDetalhesPage
  ]  */
})
export class JogoDetalhesPageModule {}
