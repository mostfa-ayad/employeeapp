import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
private supabase:SupabaseClient;
  constructor() {
    this.supabase = createClient('https://qyzthmmrboltsdmzeife.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5enRobW1yYm9sdHNkbXplaWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NTQwMzYsImV4cCI6MjA1OTUzMDAzNn0.xtofbCf5UCmma4OSXACnKmCUOdfdogrCzNSw8-4VGvs')
   }
  async createEmployee(employee: Employee) {  
     await this.supabase
      .from('employee')
      .insert({
        full_name: employee.full_name,
        email: employee.email,
        phone: employee.phone,
        gender: employee.gender,
        date_of_joining: employee.date_of_joining,
        employee_type: employee.employee_type,
        salary: employee.salary
      }).then(({ data, error }) => {  
        if (error) {
          throw error;
        }
        return data;
      } );
   
  }
  async updateEmployee(employee: Employee) {
    return await this.supabase
      .from('employee')
      .update(employee)
      .eq('employee_id', employee.employee_id).then(({ data, error }) => {
        if (error) {
          throw error;
        }
        return data;
      });
  }
  getEmployees() {
    return  this.supabase
      .from('employee')
      .select('*').then(({ data, error }) => {
        if (error) {
          throw error;
         
        }
        return data as Employee[];
      });
  } 
  deleteEmployee(id:number) {
    return this.supabase
      .from('employee')
      .delete()
      .eq('employee_id', id).then(({ data, error }) => {
        if (error) {
          throw error;
        }
        return data;
      });
  }
  async getEmployeeById(id: number): Promise<Employee> {
    return await this.supabase
      .from('employee')
      .select('*')
      .eq('employee_id', id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          throw error;
        }
       var emp=new Employee();
       emp.employee_id=data?.employee_id;
       emp.full_name=data?.full_name;      
       emp.email=data?.email;
       emp.phone=data?.phone;    
       emp.gender=data?.gender;
       emp.date_of_joining=data?.date_of_joining;
       emp.employee_type=data?.employee_type;
       emp.salary=data?.salary;
        emp.salary=data?.salary;
        return emp;
      });
  }
}
