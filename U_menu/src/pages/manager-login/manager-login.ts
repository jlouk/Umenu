import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'manager-login',
  templateUrl: 'manager-login.html'
})
export class ManagerLoginPage {
  username: string;
  pass: any;
  dataString: any;
  failedLogin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ngOnInit() {
    this.failedLogin = false;
  }

  manLogin() {
    console.log(this.username);
    console.log(this.pass);
    //1. login post
    /*
     let body   : string	 = "username=" + this.username + ", password=" + this.pass,
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': type}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/managerLogin.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
           this.dataString = data;
           this.failedLogin = false;
           //2. if successful than go to manager pages

         }
         // Otherwise let 'em know anyway
         else
         {
             console.log("login failed");
             this.failedLogin = true;
         }
      });
      */

  }

  manRegister() {

  }
   
}
