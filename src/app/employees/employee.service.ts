import { Injectable } from "@angular/core";
import { Employee } from "../models/employee";


@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [{
        id: 1,
        name: 'Mark',
        gender: 'Male',
        contactPreference: 'Email',
        email: 'mark@gmail.com',
        dateOfBirth: new Date('10/25/1988'),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/Mark.jpg',
        password: null,
        confirmPassword: null
    }, {
        id: 2,
        name: 'Mary',
        gender: 'Female',
        contactPreference: 'Phone',
        phoneNumber: 9864562380,
        dateOfBirth: new Date('11/20/1980'),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/Mary.jpg',
        password: null,
        confirmPassword: null
    }, {
        id: 3,
        name: 'John',
        gender: 'Male',
        contactPreference: 'Phone',
        phoneNumber: 9864555380,
        dateOfBirth: new Date('08/20/1975'),
        department: '2',
        isActive: false,
        photoPath: 'assets/images/John.jpg',
        password: null,
        confirmPassword: null
    }];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }
}