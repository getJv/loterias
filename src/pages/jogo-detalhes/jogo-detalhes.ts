import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Jogo } from '../../models/Jogo';

/**
 * Generated class for the JogoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogo-detalhes',
  templateUrl: 'jogo-detalhes.html',
})
export class JogoDetalhesPage {

  public jogo:Jogo;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
      this.jogo = this.navParams.get('jogoSelecionado');
  }

  // Opções do actionSheet
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha uma opções',
      buttons: [
        {
          text: 'Editar',
          //role: 'destructive', ver o que é isso depois
          handler: () => {
            //this.navCtrl.push(MegasenaPage);
            console.log('Camar editar')
          }
        },{
          text: 'Repetir jogo',
          handler: () => {
            console.log('Repetir Jogo');
          }
        },{
          text: 'Excluir',
          handler: () => {
            console.log('Excluir Jogo');
          }
        },{
          text: 'Arquivar',
          handler: () => {
            console.log('Arquivar Jogo');
          }
        },{
          text: 'Sorteio completo',
          handler: () => {
            console.log('ir para sorteios');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    
    
    
    
    
    console.log(this.jogo);
  }

}
