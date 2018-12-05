import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../models/employee';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  @Input() employee: Employee;
 // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }


  // handleClick(){
  //   this.notify.emit(this.employee);
  // }
}
