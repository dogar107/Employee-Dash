import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Task {
selectedData:any;
url = `http://localhost:3000/tasks`;
 
  constructor(private http:HttpClient){}
 getUsers():Observable<any[]>{
 return this.http.get<any[]>(this.url)
 } 
updateUser(id:number,status:string):Observable<any>{
 return this.http.patch(`${this.url}/${id}`,{
 status:status
 })
 }
 updateUsers(id:number):Observable<any>{
 return this.http.get<any[]>(`${this.url}/${id}`)
 }
}
