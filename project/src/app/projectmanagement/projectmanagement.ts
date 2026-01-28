import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Projects } from '../services/projects';
import { Router } from '@angular/router';
import { Header } from '../header/header';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Task } from '../services/task';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { forkJoin } from 'rxjs';
import { Child } from '../child/child'; 


@Component({
  selector: 'app-projectmanagement',
  imports: [MatSelectModule,MatTableModule,Header,FormsModule,MatIconModule,MatMenuModule,CommonModule,MatDialogModule,MatListModule,Child],
  templateUrl: './projectmanagement.html',
  styleUrl: './projectmanagement.css',
})
export class Projectmanagement {
filteredUsers:Projects[]=[];
allPosts: any[] = [];
  posts: any[] = [];
  displayedColumns: string[] = ['name','client','deadline', 'status','assigned','actions'];
  employeelist=['Usman','Muqeet','Razzaq','Ahmed','Razi']
  dataSource = this.posts;
  selectedOp: string = '';
  originalPosts: any[] = [];
selectedStatus: string = "";
selectedClient: string = "";
selectedRow: any;
  loading = true;
  
  constructor(
    private ProjectService: Projects,
    private TaskService: Task,
    private fb: FormBuilder,
    private http: HttpClient,
    private router:Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

    

  ngOnInit(): void {
    this.loadUsers();
     
 
  }




  loadUsers(): void {
  forkJoin({
    tasks: this.TaskService.getUsers(),
    projects: this.ProjectService.getUser()
  }).subscribe(({ tasks, projects }) => {
    for (let i = 0; i < projects.length; i++) {
      if (tasks[i]) {
        projects[i].status = tasks[i].status;
      } 

    this.posts = projects;
    this.allPosts = [...this.posts];
    this.cdr.detectChanges()
    console.log(this.posts);
  }
})
}


 OnOptionChange(value:string){
 this.selectedStatus=value;
 this.applyFilters()
 }

  OnEmployeeChange(value:string){
 this.selectedClient=value;
 this.applyFilters()
 }



  updateStatus(tasks:any,assigned:string){
   
  this.ProjectService.updateUser(tasks.id,assigned).subscribe((tasks:any)=>{ 
  console.log(tasks);
  tasks.assigned=assigned;
  
  })
 
}
   delete(id: number): void {
    this.ProjectService.deleteUser(id).subscribe(
      () => {
      this.loadUsers()
      },
      
    );
  }

 
  applyFilters() {
  this.posts = this.allPosts.filter(item => {

    const statusMatch =
      !this.selectedStatus || this.selectedStatus === 'All' || item.status === this.selectedStatus;

    const clientMatch =
      !this.selectedClient || this.selectedClient === 'All' || item.client === this.selectedClient;

    return statusMatch && clientMatch;
  });

  this.cdr.detectChanges();
}

onRowClick(id:number){
   this.TaskService.getUsers().subscribe({
  next: (data: any[]) => {
      const selected = data.find(t => t.id === id);
      if(selected){
      this.selectedRow=selected;
      console.log(this.selectedRow);
      }
    }
  })
};


}





