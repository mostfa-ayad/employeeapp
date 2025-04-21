import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  isEditeMode: boolean = false;
  route:ActivatedRoute;
  service=inject(SupabaseService);
employeeObj:Employee= new Employee();
constructor(route:ActivatedRoute) {
  this.route=route;
}
ngOnInit() {
 try{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id>0) {
    this.isEditeMode = true; // Set edit mode to true if an ID is present
    this.service.getEmployeeById(id).then((data) => {
      this.employeeObj = data as Employee; // Cast to the appropriate type if needed
    });
  }
 }catch(error) {
  console.error('Error fetching employee:', error);
 }
}
createEmployee() {
this.service.createEmployee(this.employeeObj).then(() => {
 alert('Employee created successfully!');
}).catch((error) => {
 alert('Error creating employee: ' + error.message);
});

}
}
