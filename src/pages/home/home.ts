import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { MegasenaPage } from '../forms/megasena/megasena';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController
      ) {

  }

  // Opções do actionSheet
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione o jogo',
      buttons: [
        {
          text: 'Mega sena',
          //role: 'destructive', ver o que é isso depois
          handler: () => {
            this.navCtrl.push(MegasenaPage);
          }
        },{
          text: 'Lotomania',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  

}
