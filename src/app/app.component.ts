import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "./shared/services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  admin = false;
  user = false;

  ngOnInit(): void {
    this.firebaseService.checkAdmin().subscribe(admin => {
      this.admin = admin;
    });
  }
  constructor(public firebaseService: FirebaseService) {

  }
}
