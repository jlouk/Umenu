import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'manager-menu',
  templateUrl: 'manager-menu.html'
})
export class ManagerMenuPage {
  user: {username: string};
  postdata: {restaurantId : number};
  dataString: any;
  categories: any;
  dishes: any;
  hasError: boolean;
  restaurant: any;
  loggedInUser: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.loggedInUser = navParams.get('user');
  }

  ngOnInit() {
    this.user = this.auth.getUserInfo();
  }

  loadCategories() {
      
    this.postdata.restaurantId = this.loggedInUser.restaurantId;
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
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
      
  }


  loadDishes() {
      
      this.postdata.restaurantId = this.loggedInUser.restaurantId;
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
         }
         // Otherwise let 'em know anyway
         else
         {
          this.hasError = true;
         }
      });
      
   }
   
}
