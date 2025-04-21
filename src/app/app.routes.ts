import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component:DashboardComponent
    },
    {
        path: 'list',
        component: EmployeeListComponent,   pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateEmployeeComponent, pathMatch: 'full'
    },{
        path: 'edit-employee/:id',
        component: CreateEmployeeComponent,
    },
{ 
        path: '**',component:NotFoundComponent,
        pathMatch: 'full'
    },
];
