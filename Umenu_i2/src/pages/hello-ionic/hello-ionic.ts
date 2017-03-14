import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
selectedBar: any;
bars: Array<{name: string, icon: string, id: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedBar = navParams.get('bar');
    this.bars = [{name: 'State Street Brats', icon: 'beer', id: 1},
                 {name: "Chaser's", icon: 'beer', id: 2}];
  }

  barTapped(event, bar) {
    this.navCtrl.push(ItemDetailsPage, {
      bar: bar
    });
  }
}
