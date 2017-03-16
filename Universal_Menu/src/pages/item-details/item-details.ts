import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedRestaurant: any;
  menus: any;
  hasError: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRestaurant = navParams.get('restaurant');
  }

  ngOnInit() {
    this.loadMenu();
  }

/*
  loadMenu() {
    let body   : string	 = "restaurantId=" + this.selectedRestaurant.restaurantId,
        type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any		 = new Headers({ 'Content-Type': type}),
        options: any 		 = new RequestOptions({ headers: headers }),
        url 	 : any		 = "http://s673534317.onlinehome.us/scripts/getdishes.php";

    this.http.post(url, body, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      this.menus = data;
    });
  }
*/

  loadMenu() {
      let body   : string	 = "restaurantId=" + this.selectedRestaurant.restaurantId,
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': type}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/getdishes.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
           this.menus = data;
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
   }
   
}
