import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedRestaurant: any;
  dishes: any;
  categories: any;
  dataString: any;
  hasError: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRestaurant = navParams.get('restaurant');
  }

  ngOnInit() {
    this.loadCategories();
    this.loadDishes();

  }

  loadCategories() {
    let body   : string	 = "restaurantId=" + this.selectedRestaurant.restaurantId,
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': type}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/getmencat.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
           this.dataString = data;
           this.categories = JSON.parse(this.dataString._body);
           console.log(this.categories);
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
  }


  loadDishes() {
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
           this.dataString = data;
           this.dishes = JSON.parse(this.dataString._body);
           console.log(this.dishes);
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
   }
   
}
