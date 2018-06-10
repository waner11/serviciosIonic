import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
* Generated class for the UsersPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  num_usuarios:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
  }
  
  users: any[] = [];
  
  ionViewDidLoad() {

    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data["results"];
        this.num_usuarios = this.users.length;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
