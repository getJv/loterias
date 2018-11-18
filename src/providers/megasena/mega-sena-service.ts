import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspelhoMega } from '../../models/EspelhoMega';
import { Observable } from 'rxjs/Observable';

const API_URL = 'http://localhost:3000/api';

@Injectable()
export class MegasenaProvider {

  constructor(public http: HttpClient) {
    
  }

  registra(espelho:EspelhoMega){
    return this.http
    .post(API_URL, espelho)
    .do(()=>{ espelho.enviado = true})
    .catch(
      (err) =>  Observable.of(new Error('Falha no envio'))
    
    );
  }
  
  getAll(){
    return this.http.get(API_URL + '/jogos');
  }

}
