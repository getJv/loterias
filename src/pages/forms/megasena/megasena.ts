import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-megasena',
  templateUrl: 'megasena.html',
})
export class MegasenaPage {

  dezenasSelecionadas:boolean[] = new Array();
  concurso:number;
  qntConcursos:number;
  teimosinha:boolean = false;
  qntTeimosinha:number
  recorrente:boolean = false;

  numberLimit:number = 60;
  minimoDezenas:number = 6;
  maximoDezenas:number = 15;
  valores:number[] = new Array();

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    for(let i = 1; i < this.numberLimit; i++  ){
        this.dezenasSelecionadas[i] = false;
    }  

    this.valores[6]  = 3.50;
    this.valores[7]  = 24.50;
    this.valores[8]  = 98;
    this.valores[9]  = 294;
    this.valores[10] = 735;
    this.valores[11] = 1617;
    this.valores[12] = 3234;
    this.valores[13] = 6006;
    this.valores[14] = 10510.50;
    this.valores[15] = 17517.50;
  }

  toggleSelect(dezena:number){
       
      if(this.dezenasSelecionadas[dezena]){
        this.dezenasSelecionadas[dezena] = false;
        console.log(this.dezenasSelecionadas)
      }else if(this.quantidadeMarcado < this.maximoDezenas){
        this.dezenasSelecionadas[dezena] = true;
      }

     /* <!-- </ion-col> --> */
    
  }



  get isTeimosinha(){
    return this.teimosinha;
  }

  get isRecorrente(){
    return this.recorrente;
  }

  get quantidadeMarcado():number{

    return this.dezenasSelecionadas.filter(tt => tt).length; 
  }

  getPreco(number:number){

    if(number >= this.minimoDezenas && number <= this.maximoDezenas)
      return this.valores[number];
    return 0;

  }


  isSelected(dezena:number){
    return this.dezenasSelecionadas[dezena]
  }

  counter(i: number) {
    return new Array(i);
  }

  cadastrar(){

    try { // respeite a ordem dos IFs ele atende a validação sequêncial

      if (this.quantidadeMarcado < 6 )
        throw new Error('O jogo mínimo tem 6 dezenas.')
      
      if (this.concurso < 1000 || !this.concurso )
        throw new Error('O número do concurso inválido.')
      
      if( this.recorrente )
        return;
      
      if(   !this.recorrente 
            && !this.teimosinha
            && !this.qntConcursos 
        ) throw new Error('Informe a quantidade de concursos.')

      if(  this.teimosinha
        && !this.qntTeimosinha 
      ) throw new Error('Informe a quantidade de teimosinhas.')

      // Programar o envio para um ServiceUIFrameContext.getCachedFrameMessage.length./

    } catch (error) {
        
      /*this.vibration.vibrate(500);*/
      this.alertCtrl.create({
        title:'Atenção',
        subTitle:  error.message,
        buttons:[
          {text: 'ok'}
        ]
      }).present();
      
    }
    return;
  }
}
