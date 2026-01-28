import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from '../services/employee';
import { Header } from '../header/header';
import { Projects } from '../services/projects';

@Component({
  selector: 'app-employeemanagement',
  imports: [CommonModule, MatSelectModule, MatTableModule, Header, FormsModule],
  templateUrl: './employeemanagement.html',
  styleUrls: ['./employeemanagement.css'],
})
export class Employeemanagement {
  posts: any[] = [];           
  originalPosts: any[] = [];
  projects: any[] = [];        
  selectedRow: any = null;
  selectedOption: string = 'All';
  displayedColumns: string[] = ['name', 'email', 'role', 'department', 'assigned'];

  constructor(
    private EmployeeService: Employee,
    private ProjectService: Projects,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadProjects();
  }

  loadUsers() {
    this.EmployeeService.getUsers().subscribe(users => {
      this.posts = users;
      this.originalPosts = users;
      this.counts(); 
      this.cdr.detectChanges()
    });
  }

 
  loadProjects() {
    this.ProjectService.getUser().subscribe((data: any) => {
      this.projects = data;
      this.counts(); 
      this.cdr.detectChanges()
    });
  }

 
  counts() {
    if (this.posts.length && this.projects.length) {
      this.posts.forEach(emp => {
        const assignedProjects = this.projects.filter(p => p.assigned === emp.name); 
        emp.assignedCount = assignedProjects.length;
      });
    }
  }

  OnOptionChange(role: string) {
    if (role === 'All') {
      this.posts = this.originalPosts;
    } else {
      this.posts = this.originalPosts.filter(
        emp => emp.role === role || emp.department === role
      );
    }
    this.counts();
  }

  
  onRowClick(row: any) {
    this.selectedRow = row;
  }
}




