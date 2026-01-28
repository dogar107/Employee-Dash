import { Routes } from '@angular/router';
import { Employeemanagement } from './employeemanagement/employeemanagement';
import { Header } from './header/header';
import { Projectmanagement } from './projectmanagement/projectmanagement';
import { Taskmanagement } from './taskmanagement/taskmanagement';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
{path:'employee',component:Employeemanagement},
{path:'',component:Header},
{path:'project',component:Projectmanagement},
{path:'task',component:Taskmanagement},
{path:'dashboard',component:Dashboard}
];
