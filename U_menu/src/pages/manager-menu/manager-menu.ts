import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../../providers/auth-service';
import { ManagerDishDetails } from '../manager-dishdetails/manager-dishdetails';
//import { Dialogs } from '@ionic-native/dialogs';



@Component({
  selector: 'manager-menu',
  templateUrl: 'manager-menu.html'
})
export class ManagerMenuPage {
  user: {username: string};
  postdata: any;
  dataString: any;
  categories: Array<{categoryId: any, categoryName: any, restaurantId: any, display: boolean}>;
  dishes: any;
  hasError: boolean;
  restaurant: any;
  loggedInUser: any;
  editData: any;
  deleteResponse: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public http: Http,  private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.loggedInUser = navParams.get('user');
    this.postdata = {restaurantId: -1};
    this.user = this.auth.getUserInfo();
  }

  ngOnInit() {
    this.loadCategories();
    this.loadDishes();
  }

  loadCategories() {
      
    this.postdata.restaurantId =  this.loggedInUser[0].restaurantId;
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
      
      this.postdata.restaurantId = this.loggedInUser[0].restaurantId;
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
   
  editDish(dishToEdit) {
    this.editData = dishToEdit;
    this.navCtrl.push(ManagerDishDetails, {
      dish: this.editData,
      user: this.loggedInUser
    });
  }

  addDish() {
    this.editData = {userId: this.loggedInUser[0].userId, dishId: -1, description: "", restaurantId: this.loggedInUser[0].restaurantId,
                     categoryId: -1, dishName: "", price: 0};
    this.navCtrl.push(ManagerDishDetails, {
      dish: this.editData,
      user: this.loggedInUser
    });
  }

  deleteDish(dishToDelete) {
      let body   : string	 = JSON.stringify({userId: this.loggedInUser[0].userId, dishId: dishToDelete.dishId}),
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': 'application/json'}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/deleteDish.php";

      this.http.post(url, body, options)
      .map(res => res.json())
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.valid == 1)
         {
           console.log("delete was successful");
           this.refreshPage();
         }
         // Otherwise let 'em know anyway
         else
         {
           console.log("delete was unsuccessful");
         }
      });
  }

  refreshPage() {
    this.loadCategories();
    this.loadDishes();
  }

  toggleDisplay(category) {
     if (category.display) {
       category.display = false;
     } else if (!category.display) {
       category.display = true;
     }
   }
   
}
