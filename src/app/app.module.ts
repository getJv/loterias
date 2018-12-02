import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MegasenaPage } from '../pages/forms/megasena/megasena';
import { CommonModule } from '@angular/common';


// ativa o perador finally para uso na no cadastro.ts
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do'; // é chamado apos o service para fazer algo.
import 'rxjs/add/operator/mergeMap'; // une dois observables
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise'; // converte promisse em observable
import 'rxjs/add/observable/of'; 
import { HttpClientModule } from '@angular/common/http';
import { JogosProvider } from '../providers/jogos-provider';
import { SorteiosProvider } from '../providers/sorteios/sorteios';
import { JogoDetalhesPage } from '../pages/jogo-detalhes/jogo-detalhes';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MegasenaPage,
    JogoDetalhesPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule, 
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MegasenaPage,
    JogoDetalhesPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JogosProvider,
    SorteiosProvider,
    
  ]
})
export class AppModule {}
