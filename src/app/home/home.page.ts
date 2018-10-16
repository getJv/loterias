import { Component } from '@angular/core';
import { Jogo } from '../models/Jogo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private listaDeJogos:Jogo[] = new Array();


  constructor(){
    this.listaDeJogos.push(
      {
        concurso:1234,
        dataSorteio:'25/08/1986',
        nome: 'Lotomania'
      },{
        concurso:4321,
        dataSorteio:'27/08/1986',
        nome: 'Mega Sena'
      }
    )




  }


}
