import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historyList = [{
    from: "Zürich, Hauptbahnhof",
    to: "Zürich, Morgental"
  }, {
    from: "Zürich, Coach Park",
    to: "Zürich, Teifenbrunnen"
  },{
    from: "Zürich, Chinagarten",
    to: "Zürich, Letzigrund"
  }];

  from = "";
  to = "";

  constructor(public navCtrl: NavController) {

  }

  openHistory(history) {
    console.log(history);
    this.from = history.from;
    this.to = history.to;
  }

  calulcateCommuting() {
    this.navCtrl.push(ListPage);
  }
}
