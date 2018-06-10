import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DgiiProvider } from '../../providers/dgii/dgii';
import { DgiiModel } from '../../models/dgiiModel';

/**
 * Generated class for the DgiiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dgii',
  templateUrl: 'dgii.html',
})
export class DgiiPage {
  rncCedula:string;
  datos : DgiiModel = new DgiiModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public dgiService: DgiiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DgiiPage');
  }

  validar() {
    console.log(this.rncCedula);
    this.dgiService.getDatos(this.rncCedula)
    .subscribe(
      (data) => {
        this.datos = data as DgiiModel;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
