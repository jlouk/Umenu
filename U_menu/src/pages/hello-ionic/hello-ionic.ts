import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ManagerLoginPage } from '../manager-login/manager-login';
import { Geolocation } from 'ionic-native';
import {Observable} from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
selectedRestaurant: any;
restaurants: any;
lat: any;
lon: any;
dist: string;
postdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.restaurants = [];
  }

  restaurantTapped(event, restaurant) {
    this.navCtrl.push(ItemDetailsPage, {
      restaurant: restaurant
    });
  }

  ngOnInit() {
    this.getLocation();
  }

  load() {
    
    this.dist = "5";
    this.postdata = {'lat': this.lat, 'lon': this.lon, 'dist': this.dist};
    let body   : string  = JSON.stringify(this.postdata),
        type   : string  = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any     = new Headers({ 'Content-Type':'application/json'}),
        options: any     = new RequestOptions({ headers: headers }),
        url    : any     = "http://s673534317.onlinehome.us/scripts/restaurants.php";

    this.http.post(url, body, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      this.restaurants = data;
    });
  
  /*    let type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any		 = new Headers({ 'Content-Type': type}),
        options: any 		 = new RequestOptions({ headers: headers }),
        url 	 : any		 = "http://s673534317.onlinehome.us/scripts/restaurants.php";

    this.http.get(url, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      this.restaurants = data;
    });*/
  }

  manLogin() {
    this.navCtrl.push(ManagerLoginPage);
  }

  getRestaurants(){
    return this.restaurants;
  }

  getLocation(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.load();
 
    }, (err) => {
      console.log(err);
    });
 
  }


}

