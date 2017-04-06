import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'manager-menu',
  templateUrl: 'manager-menu.html'
})
export class ManagerMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ngOnInit() {

  }
   
}
