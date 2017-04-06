import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {Observable} from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  //restaurants: Array<{restaurantId: number, restaurantName: string, latitude: string, longitude: string}>;
  restaurants: any;
  lat: any;
  lon: any;
  dist: any;
  postdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }


  ngOnInit() {
    this.loadMap();
  }

  load() {
    this.restaurants = [];

    this.dist = "5";
    this.postdata = {'lat': this.lat, 'lon': this.lon, 'dist': this.dist};
    let body   : string  = JSON.stringify(this.postdata),
        type   : string  = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any     = new Headers({ 'Content-Type':'application/json'}),
        options: any     = new RequestOptions({ headers: headers }),
        url    : any     = "http://s673534317.onlinehome.us/scripts/restaurants.php";

    this.http.post(url, body, options)
    .map(res => res.json())
    .subscribe(data =>
    {
      this.restaurants = data;
      this.addMarkers();
    });
    /*
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
    */

  }
 
  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.load();
 
    }, (err) => {
      console.log(err);
    });
 
  }

  addMarkers(){
    
    for (let r of this.restaurants) {
      let latLng = new google.maps.LatLng(r.latitude, r.longitude);
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
  
      let content = "<h2>" + r.restaurantName + "</h2>";          
  
      this.addInfoWindow(marker, content);
    }
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
 
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  
  }
 
}