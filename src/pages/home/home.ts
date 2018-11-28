import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { MegasenaPage } from '../forms/megasena/megasena';

import { SorteioMega } from '../../models/SorteioMega';
import { JogosProvider } from '../../providers/jogos-provider';
import { JogoDetalhesPage } from '../jogo-detalhes/jogo-detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public jogos:SorteioMega[];

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      public megaService:JogosProvider,
      private loadingCtrl:LoadingController,
      private alertCtrl:AlertController
      ) {

  }

  ionViewDidLoad(){
    this.megaService.getJogos().subscribe(
      (dados:SorteioMega[]) => {
        this.jogos = dados;
        //console.log(dados[0].jogodetalhes.dezenas)
        
        loading.dismiss();
      },
      (err)=>{
        console.log(err); 
        loading.dismiss();
        this.alertCtrl.create({
          title:'Erro',
          subTitle:'Não foi possível carregar a lista de carros',
          buttons:[{
            text:'Ok'
          }]
        }).present();
      }
    )
   
    let loading = this.loadingCtrl.create({
      content:'Aguarde ...'
    });
    loading.present();
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

  detalharJogo(jogo:SorteioMega){
    
    this.navCtrl.push(JogoDetalhesPage.name,{jogoSelecionado:jogo})

  }

  

  

  

}
