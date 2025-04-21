import { Injectable } from '@angular/core';
import { Employee, } from '../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = 'https://api.freeprojectapi.com/api/EmployeeApp/';
   private employees: Employee[] = [
   ];
  constructor(private http:HttpClient) { }

  createEmployee(employee: Employee) :Observable<Employee> {

   return this.http.post<Employee>(this.url, employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
