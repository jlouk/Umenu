import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ManagerMenuPage } from "../manager-menu/manager-menu";
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'manager-login',
  templateUrl: 'manager-login.html'
})
export class ManagerLoginPage {
  username: string;
  pass: any;
  dataString: any;
  failedLogin: boolean;
  registerCredentials: {username: string, password: string};
  user: any;
  postdata: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ngOnInit() {
    this.failedLogin = false;
    this.registerCredentials = {username: '', password: ''};
  }

  manLogin() {
    console.log(this.username);
    console.log(this.pass);
    this.registerCredentials = {username: this.username, password: this.pass};
    //1. login post
    this.postdata = {'email': this.username, 'password': this.pass};

    let body   : string	 = JSON.stringify(this.postdata),
          type 	 : string	 = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any		 = new Headers({ 'Content-Type': 'application/json'}),
          options: any 		 = new RequestOptions({ headers: headers }),
          url 	 : any		 = "http://s673534317.onlinehome.us/scripts/login.php";

      this.http.post(url, body, options)
      .map(res => res.json())
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.valid == 1)
         {
           this.user = data;
           this.failedLogin = false;
           this.auth.login(this.registerCredentials).subscribe(allowed => {
              if (allowed) {
                this.failedLogin = false;
                setTimeout(() => {
                });
              } else {
                console.log("Access Denied");
              }
           },
           error => {
             console.log(error);
             this.failedLogin = true;
           });

           this.navCtrl.push(ManagerMenuPage, {
             user: this.user
           });

           //2. if successful than go to manager pages

         }
         // Otherwise let 'em know anyway
         else
         {
             this.dataString = data;
             console.log("login failed");
             this.failedLogin = true;
         }
      });
    
  }

  manRegister() {

  }
   
}
