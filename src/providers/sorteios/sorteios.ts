import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogo } from '../../models/Jogo';

const APT_URL_ROOT = "http://localhost:3000/api/sorteios";

@Injectable()
export class SorteiosProvider {

  constructor(public http: HttpClient) {
    
  }

  getSorteio(jogo:Jogo){
   
    return this.http.get(APT_URL_ROOT + "/" + jogo.jogotipo.nome + "/" + jogo.concurso);
  }

}
