import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Employee } from '../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
service=inject(SupabaseService);
  employees=signal<Employee[]>([]); // Initialize as an empty array

  constructor( public route:Router) {
  
    this.getEmployees();
  }

  getEmployees() {
   try{
  this.service.getEmployees().then((data) => {
     this.employees.update(v=>v=data as Employee[] )// Cast to the appropriate type if needed
    });
   }catch(error) {
    console.error('Error fetching employees:', error);
   }
  }
  deleteEmployee(id:number) {
  try{
    this.service.deleteEmployee(id).then((data) => {    
      alert('Employee deleted successfully!');  
      this.getEmployees();
    });
  

  }catch(error) { 
   alert('Error deleting employee: ' + error);
  }}
  editEmployee  (id: number) {
    // Implement your edit logic here
  this.route.navigate(['/edit-employee', id]);
  }
}
