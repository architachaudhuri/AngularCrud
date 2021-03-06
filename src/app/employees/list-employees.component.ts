import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
 // dataFromChild: Employee;
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  // handleNotify(eventData: Employee){
  //   this.dataFromChild = eventData;
  // }
  onClick(employeeId: number) {
    this._router.navigate(['employees', employeeId]);
  }

}
