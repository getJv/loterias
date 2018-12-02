import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { MegasenaPage } from '../forms/megasena/megasena';
import { JogosProvider } from '../../providers/jogos-provider';
import { JogoDetalhesPage } from '../jogo-detalhes/jogo-detalhes';
import { Jogo } from '../../models/Jogo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public jogos:Jogo[];

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      public jogosService:JogosProvider,
      private loadingCtrl:LoadingController,
      private alertCtrl:AlertController
      ) {

  }

  ionViewDidLoad(){
    this.jogosService.getJogos().subscribe(
      (dados:Jogo[]) => {
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

  detalharJogo(jogo:Jogo){
    
    this.navCtrl.push(JogoDetalhesPage,{jogoSelecionado:jogo})
    
  }

  

  

  

}
