import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspelhoMega } from '../models/EspelhoMega';
import { Observable } from 'rxjs/Observable';
import { Jogo } from '../models/Jogo';


const APT_URL_ROOT = "http://localhost:3000/api";

@Injectable()
export class JogosProvider {
  constructor(public http: HttpClient) {
  }
  registra(espelho: EspelhoMega) {
    return this.http
      .post("http://localhost:3000/api", espelho)
      .do(() => { espelho.enviado = true; })
      .catch((err) => Observable.of(new Error('Falha no envio')));
  }
  
  getJogos() {
    return this.http.get(APT_URL_ROOT + "/jogos");
  }

  getJogo(jogo:Jogo){

     return this.http.get(APT_URL_ROOT + "/jogo/" + jogo.id); 
  }

}