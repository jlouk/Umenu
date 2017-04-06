import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'manager-dishdetails',
  templateUrl: 'manager-dishdetails.html'
})
export class ManagerDishDetails {
dish: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.dish = navParams.get('dish');
  }

  ngOnInit() {
    
  }
   
}
