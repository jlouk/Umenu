import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Helloprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Helloprovider {

  restuarants: any;

  constructor() {
  	this.restaurants = ['Porta Bella', 'State Street Brats', 'Chasers Bar and Grill', 'Essen Haus', 'Sunroom Cafe'];
  }
}