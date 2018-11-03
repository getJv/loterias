import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { MegasenaPage } from '../forms/megasena/megasena';
import { MegasenaProvider } from '../../providers/megasena/mega-sena-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public jogos;

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      public megaService:MegasenaProvider
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

  getAll(){

    this.megaService.getAll().subscribe(
      (dados) => {
        this.jogos = dados;
        console.log(dados)
      },
      (err)=>console.log(err)
    )
  }


  

}
