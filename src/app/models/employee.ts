export class Employee {
    employee_id: number;
    full_name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_joining: string;
    employee_type: string;
    salary: number;
    constructor() {
        this.employee_id = 0;
        this.full_name = '';
        this.email = '';
        this.phone = '';    
        this.gender = '';
        this.date_of_joining = '';
        this.employee_type = '';
        this.salary = 0;
    }
  }