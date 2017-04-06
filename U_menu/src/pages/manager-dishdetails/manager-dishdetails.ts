import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'manager-dishdetails',
  templateUrl: 'manager-dishdetails.html'
})
export class ManagerDishDetails {
dish: {userId: number, dishId: number, description: string, restaurantId: number, categoryId: number, dishName: string, price: number};
categories: any;
dataString: any;
user: any;
postdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.dish = navParams.get('dish');
    this.user = navParams.get('user');
  }

  ngOnInit() {
    this.loadCategories();
  }
   
  loadCategories() {    
    let body   : string	 = JSON.stringify({restaurantId: this.dish.restaurantId}),
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
         }
         // Otherwise let 'em know anyway
         else
         {
          console.log("error in category retrieval");
         }
      });
      
  }

  submitData(){
      if (this.dish.categoryId > 0 && this.dish.description != "" && this.dish.dishName != "" &&
          this.dish.price >= 0){
        this.dish.userId = this.user[0].userId;
        let body   : string	 = JSON.stringify(this.dish),
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': 'application/json'}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/editDish.php";

        this.http.post(url, body, options)
        .map(res => res.json())
        .subscribe((data) =>
        {
         // If the request was successful notify the user
          if(data.valid == 1)
          {
            this.navCtrl.pop();
            console.log("successful dish edit/creation");
          }
          // Otherwise let 'em know anyway
          else
          {
            console.log("error in dish edit/creation");
          }
        });
      } else {
          console.log("enter data for all fields");
      }
    }
}
