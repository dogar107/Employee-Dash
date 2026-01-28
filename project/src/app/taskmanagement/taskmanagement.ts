import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Task } from '../services/task';
import { Header } from '../header/header';
import { Employee } from '../services/employee';
import { CommonModule } from '@angular/common';
import { Projects } from '../services/projects';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-taskmanagement',
  imports: [MatSelectModule,MatTableModule,Header,CommonModule,FormsModule],
  templateUrl: './taskmanagement.html',
  styleUrl: './taskmanagement.css',
})
export class Taskmanagement {


  posts: any[] = [];
  allPosts: any[] = [];

  displayedColumns: string[] = ['name','description','status','assigned','deadline'];

  selectedStatus: string = 'All';
  selectedEmployee: string = 'All';
  selectedDate: string = 'All';

  statusList = ['In-Progress', 'Pending', 'Completed'];

  constructor(
    private TaskService: Task,
    private ProjectService: Projects,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    forkJoin({
      tasks: this.TaskService.getUsers(),
      projects: this.ProjectService.getUser()
    }).subscribe(({ tasks, projects }) => {
    
      this.posts = tasks.map((task: any, i: number) => ({
        ...task,
        assigned: projects[i]?.assigned,
        deadline: projects[i]?.deadline 
      }));

     
      this.allPosts = [...this.posts];
      this.cdr.detectChanges()
      console.log(this.posts);
    });
  }

 
  OnOptionChange(value: string) {
    this.selectedStatus = value;
    this.applyFilters();
  }

  OnEmployeeChange(value: string) {
    this.selectedEmployee = value;
    this.applyFilters();
  }

  OnDateChange(value: string) {
    this.selectedDate = value;
    this.applyFilters();
  }

  applyFilters() {
    this.posts = this.allPosts.filter(emp => {
      const statusMatch = this.selectedStatus === 'All' || emp.status === this.selectedStatus;
      const employeeMatch = this.selectedEmployee === 'All' || emp.assigned === this.selectedEmployee;
      const dateMatch = this.selectedDate === 'All' || emp.deadline === this.selectedDate;
      return statusMatch && employeeMatch && dateMatch;
    });
  }

  updateStatus(task: any, status: string) {
    this.TaskService.updateUser(task.id, status).subscribe(() => {
      task.status = status;
      this.cdr.detectChanges(); 
    });
  }

}

