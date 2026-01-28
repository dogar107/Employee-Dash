import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogContent, MatDialogModule } from "@angular/material/dialog";
import { Task } from '../services/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-child',
  imports: [MatDialogModule,FormsModule,CommonModule,MatIconModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
constructor() {}
selectedRow:any;




}

