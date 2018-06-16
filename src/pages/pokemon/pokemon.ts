import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeapiProvider } from '../../providers/pokeapi/pokeapi';
import { PokeModel } from '../../models/pokeModel';

/**
 * Generated class for the PokemonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class PokemonPage {
  pokemon:string;
  datos: PokeModel = new PokeModel();
  abilities: any[] = [];
  stats: any[] = [];
  moves: any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public pokeapi: PokeapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonPage');
  }

  buscar() {
    this.pokeapi.getDatos(this.pokemon)
    .subscribe(
      (data) => {
        this.datos = data as PokeModel;
        this.abilities = this.datos.abilities;
        this.stats = this.datos.stats;
        this.moves = this.datos.moves;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
