import { HelloIonicPage } from './hello-ionic';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ManagerLoginPage } from '../manager-login/manager-login';
import { Geolocation } from 'ionic-native';
import {Observable} from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

let helloIonic = null;

describe('Initial array', () => {

	beforeEach(() => {
		helloIonic = new HelloIonicPage();
	});
		
	it('should return an array', () => {
		let result = helloIonic.getRestaurants();
		expect(Array.isArray(result)).toBeTruthy;
	});
	
	it('should contain Porta Bella', () => {
		let array = helloIonic.getRestaurants();
		expect(array).toContain('Porta Bella');
	});
});
