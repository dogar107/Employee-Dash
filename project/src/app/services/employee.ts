import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Employee {
   url = `http://localhost:3000/employee`;
   
  constructor(private http:HttpClient){}
 getUsers():Observable<any[]>{
 return this.http.get<any[]>(this.url)
 } 
  
}
