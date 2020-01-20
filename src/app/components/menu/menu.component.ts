import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../shared/services/firebase.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  checkForChapter;

  constructor( public firebaseService: FirebaseService, private route: Router) {
    this.route.events.subscribe(event => {
      if(event instanceof NavigationStart){}
      if(event instanceof NavigationEnd){
        this.checkChapter();
      }
    });
  }

  ngOnInit() {
    this.checkChapter();
  }

  checkChapter(){
    this.checkForChapter = this.route.url === '/menu/calendar' ? 'calendar' :
      this.route.url === '/menu/profile' ? 'profile' :
        this.route.url === '/menu/employees' ? 'employees' : '';
  }

}
