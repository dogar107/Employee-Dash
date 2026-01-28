import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  selectedData:any;
 url = `http://localhost:3000/project`;
   
  constructor(private http:HttpClient){}
 getUser():Observable<any[]>{
 return this.http.get<any[]>(this.url)
 }  
 deleteUser(id:number):Observable<any>{
 return this.http.delete<any>(`${this.url}/${id}`)
 }
 updateUser(id:number,assigned: string):Observable<any>{
 return this.http.patch(`${this.url}/${id}`, {
 assigned: assigned
 })
 }
 postUser(id:number,user:any):Observable<any>{
 return this.http.post<any>(`${this.url}/${id}`,user)
 }
 
 getProjects(userId:string) {
  return this.http.get(`${this.url}/${userId}`);
}

  
} 
