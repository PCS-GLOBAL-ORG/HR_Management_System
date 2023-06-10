import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employeeuser } from './employeeuser';
import { UserRoleMaster } from './user-role-master';

@Injectable({
  providedIn: 'root'
})
export class EmployeeuserService {

  private baseURL = "http://localhost:8086/emp/employees";
  private userURL = "http://localhost:8086/role/roles";


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employeeuser[]>{
    return this.httpClient.get<Employeeuser[]>(`${this.baseURL}`);
  }

  createEmployeeUser(employee: Employeeuser): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(userId: number): Observable<Employeeuser>{
    return this.httpClient.get<Employeeuser>(`${this.baseURL}/${userId}`);
  }

  updateEmployeeUser(userId: number, employee: Employeeuser){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeeUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }

  // getAllUserRole(): Observable<UserRoleMaster[]>{
  //   return this.httpClient.get<UserRoleMaster[]>(`${this.userURL}`);
  // }

  getAllUserRole(){
    return this.httpClient.get<any[]>(this.userURL);
  }

}
