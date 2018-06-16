import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { DgiiPage } from '../pages/dgii/dgii';
import { PokemonPage } from '../pages/pokemon/pokemon';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { DgiiProvider } from '../providers/dgii/dgii';
import { PokeapiProvider } from '../providers/pokeapi/pokeapi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    DgiiPage,
    PokemonPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    DgiiPage,
    PokemonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    DgiiProvider,
    PokeapiProvider
  ]
})
export class AppModule {}
