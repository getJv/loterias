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
import { MegasenaProvider } from '../providers/megasena/mega-sena-service';

// ativa o perador finally para uso na no cadastro.ts
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do'; // é chamado apos o service para fazer algo.
import 'rxjs/add/operator/mergeMap'; // une dois observables
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise'; // converte promisse em observable
import 'rxjs/add/observable/of'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MegasenaPage
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
    MegasenaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MegasenaProvider
  ]
})
export class AppModule {}
