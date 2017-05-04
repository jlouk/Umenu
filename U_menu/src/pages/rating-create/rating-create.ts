import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'rating-create',
  templateUrl: 'rating-create.html'
})
export class RatingCreatePage {
  selectedDish: any;
  selectedRestaurant: any;
  newData: any;
  numStars: any;
  postdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedDish = navParams.get('dish');
    this.selectedRestaurant = navParams.get('selectedRestaurant');
    this.numStars = 0;
  }

  submitRating() {
    this.postdata = {dishId: this.selectedDish.dishId, rating: this.numStars};
    let body   : string  = JSON.stringify(this.postdata),
        type   : string  = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any     = new Headers({ 'Content-Type':'application/json'}),
        options: any     = new RequestOptions({ headers: headers }),
        url    : any     = "http://s673534317.onlinehome.us/scripts/addReview.php";

    this.http.post(url, body, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      console.log(data);
    });
  }

  assignValue(rating){
    this.numStars = rating;
  }

}
