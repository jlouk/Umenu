import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
selectedRestaurant: any;
restaurants: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.selectedRestaurant = navParams.get('restaurant');
    this.restaurants = [{"restaurantId":"1","restaurantName":"State Street Brats","latitude":"43.0747","longitude":"-89.396"}];
  }

  restaurantTapped(event, restaurant) {
    this.navCtrl.push(ItemDetailsPage, {
      restaurant: restaurant
    });
  }
/*
  ngOnInit() {
    this.load();
  }

  load() {
      let type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any		 = new Headers({ 'Content-Type': type}),
        options: any 		 = new RequestOptions({ headers: headers }),
        url 	 : any		 = "http://s673534317.onlinehome.us/scripts/restaurants.php";

    this.http.get(url, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      this.restaurants = data;
    });
  }
*/
}

