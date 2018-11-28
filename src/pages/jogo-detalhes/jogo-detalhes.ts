import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams
    ) {
      this.jogo = this.navParams.get('jogoSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogoDetalhesPage');
  }

}
