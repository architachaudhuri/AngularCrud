import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };
  departments: Department[] = [{
    id: 1,
    name: 'Help Desk'
  },
  {
    id: 2,
    name: 'IT'
  },
  {
    id: 3,
    name: 'HR'
  },
  {
    id: 4,
    name: 'Payroll'
  },
  {
    id: 5,
    name: 'Admin'
  }
  ];
  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    })
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    console.log(this.employee);
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
