import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Employee } from '../services/employee';
import { Projects } from '../services/projects';
import { Task } from '../services/task';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    Header,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(
    private EmployeeService: Employee,
    private ProjectService: Projects,
    private TasksService: Task,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) { }

  employeecount: number = 0;
  totalproject: number = 0;
  employees: any[] = [];
  projects: any[] = [];
  posts: any[] = []; // Used for tasks in the HTML
  loading: boolean = true;

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.EmployeeService.getUsers().subscribe((data: any[]) => {
      this.employees = data;
      this.employeecount = data.length;
      this.cdr.detectChanges();
    });

    this.ProjectService.getUser().subscribe((data: any[]) => {
      this.projects = data;
      this.totalproject = data.length;
      this.cdr.detectChanges();
    });

    this.TasksService.getUsers().subscribe((data: any[]) => {
      this.posts = data;
      this.cdr.detectChanges();
    });
  }
}

