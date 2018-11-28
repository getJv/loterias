import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EspelhoMega } from '../../../models/EspelhoMega';
import { JogosProvider } from "../../../providers/jogos-provider";


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
      public alertCtrl:AlertController,
      private megasenaService:JogosProvider) {
  }

  ionViewDidLoad() {

    this.inicializaDezenas();
    this.inicializaValoresMegaSena();

    
  }

  private inicializaDezenas(){
    for(let i = 1; i < this.numberLimit; i++  ){
        this.dezenasSelecionadas[i] = false;
    }

  }

  private inicializaValoresMegaSena(){
    
    this.numberLimit   = 60;
    this.minimoDezenas = 6;
    this.maximoDezenas = 15;
    
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
    }else if(this.quantidadeMarcado < this.maximoDezenas){
        this.dezenasSelecionadas[dezena] = true;
    }

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

  private isValid(){
    if (this.quantidadeMarcado < 6 )
    throw new Error('O jogo mínimo tem '+ this.minimoDezenas+' dezenas.')
  
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
}

  cadastrar(){

    try { 

      this.isValid();
      let espelho:EspelhoMega = {
        concurso: this.concurso,
        dezenasSelecionadas: this.dezenasSelecionadas,
        qntConcursos:this.qntConcursos,
        qntTeimosinha: this.qntTeimosinha,
        recorrente:this.recorrente,
        teimosinha: this.teimosinha,
        valor: this.getPreco(this.quantidadeMarcado),
        enviado: false
      }

      this.megasenaService.registra(espelho).subscribe(
        (data) => {console.log(data)},
        (err) => {console.log(espelho);console.log(err)},
      );
      
      
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
