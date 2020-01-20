import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input('employee') item: {id: number, name: string, surname: string, email: string, phone: number};

  constructor() { }

  ngOnInit() {
  }

}
