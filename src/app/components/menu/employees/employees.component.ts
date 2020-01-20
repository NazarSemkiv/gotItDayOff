import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../shared/services/firebase.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  currentEmployee;
  employees: any = [];

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.firebaseService.getUser().get().then((item: any) => {
      this.employees = item.docs.map(doc => {
        const id = doc.id;
        doc = doc.data();
        doc.id = id;
        return doc;
      });
    });
  }

}
