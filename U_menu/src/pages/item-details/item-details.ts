import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedRestaurant: any;
  dishes: Array<{categoryId: any, description: any, dishId: any, dishName: any, price: any,
                 restaurantId: any, numRatings: any, aveRating: any, display: boolean}>;
  categories: Array<{categoryId: any, categoryName: any, restaurantId: any, display: boolean}>;
  dataString: any;
  hasError: boolean;
  postdata: {restaurantId : number};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRestaurant = navParams.get('restaurant');
    this.postdata = {restaurantId: -1};
  }

  ngOnInit() {
    this.loadCategories();
    this.loadDishes();

  }

  loadCategories() {
    this.postdata.restaurantId = this.selectedRestaurant.restaurantId;
    let body   : string	 = JSON.stringify(this.postdata),
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': 'application/json'}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/getmencat.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
           this.dataString = data;
           console.log(this.dataString);
           this.categories = JSON.parse(this.dataString._body);
           console.log(this.categories);
           for (let category of this.categories) {
             category.display = true;
           }
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
  }


  loadDishes() {
      this.postdata.restaurantId = this.selectedRestaurant.restaurantId;
      let body   : string	 = JSON.stringify(this.postdata),
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': 'application/json'}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/getdishes.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
           this.dataString = data;
           console.log(this.dataString);
           this.dishes = JSON.parse(this.dataString._body);
           console.log(this.dishes);
           for (let dish of this.dishes) {
             dish.display = false;
           }
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
   }

   toggleDisplay(category) {
     if (category.display) {
       category.display = false;
     } else if (!category.display) {
       category.display = true;
     }
   }

   toggleDetails(dish) {
    if (dish.display) {
       dish.display = false;
     } else if (!dish.display) {
       dish.display = true;
     }
   }

   addRating() {
     
   }
}
