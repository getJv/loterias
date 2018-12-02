import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Alert, AlertController, LoadingController } from 'ionic-angular';
import { Jogo } from '../../models/Jogo';
import { SorteiosProvider } from '../../providers/sorteios/sorteios';
import { Sorteio } from '../../models/Sorteio';


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
  public sorteio:Sorteio = new Sorteio();
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public sorteiosProvider: SorteiosProvider,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController
    ) {
      this.jogo    = this.navParams.get('jogoSelecionado');
      //console.log(this.jogo)
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


  objectToArray($obj){
    let keys = Object.keys($obj)
    let array = []
    for (let key of keys) { 
      array.push($obj[key]);
    }
    return array;
  }


  ionViewDidLoad() {
    
    this.sorteiosProvider.getSorteio(this.jogo).subscribe(
      (dados:Sorteio) => {
        
        dados = dados[0]
        this.sorteio = dados;
        if(!dados){loading.dismiss(); return;}
          let arrDezenas = []
          for (let i = 1; i <= 6; i++) { 
            let index = i + "_dezena"
            arrDezenas.push(dados[index])
          }

          this.sorteio.dezenas = arrDezenas
          //console.log(this.sorteio)
        
        loading.dismiss();
      },
      (err)=>{
        console.log(err); 
        loading.dismiss();
        this.alertCtrl.create({
          title:'Erro',
          subTitle:'Não foi possível carregar o Sorteio',
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

}
