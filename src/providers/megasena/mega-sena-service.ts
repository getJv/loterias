import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspelhoMega } from '../../models/EspelhoMega';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MegasenaProvider {

  constructor(public http: HttpClient) {
    
  }

  registra(espelho:EspelhoMega){
    return this.http
    .post("http://localhost:3000", espelho)
    .do(()=>{ espelho.enviado = true})
    .catch(
      (err) =>  Observable.of(new Error('Falha no envio'))
    
    );
  }
  
  getAll(){
    return this.http.get("http://localhost:3000/index.php");
  }

}
