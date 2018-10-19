import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-megasena',
  templateUrl: 'megasena.html',
})
export class MegasenaPage {

  dezenasSelecionadas:boolean[] = new Array();
  numberLimit:number = 60;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i = 1; i < this.numberLimit; i++  ){
        this.dezenasSelecionadas[i] = false;
    }  
  }

  toggleSelect(dezena:number){
       
      if(this.dezenasSelecionadas[dezena]){
        this.dezenasSelecionadas[dezena] = false;
        
        console.log('removido')
        console.log(dezena)
        console.log(this.dezenasSelecionadas)
      }else{

        this.dezenasSelecionadas[dezena] = true;
        console.log('add')
        console.log(dezena)
        console.log(this.dezenasSelecionadas)

      }

     /* <!-- </ion-col> --> */
    
  }

  isSelected(dezena:number){
    return this.dezenasSelecionadas[dezena]
  }

}
