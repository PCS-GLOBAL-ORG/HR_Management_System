import { Injectable } from '@angular/core';
import { EmployeeJobDetails } from './employee-job-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeJobDetailsService {

  private baseURL = "http://localhost:8081/assignJob/empJob";

  constructor(private httpClient: HttpClient) { }

  getEmployeesJobList(): Observable<EmployeeJobDetails[]>{
    return this.httpClient.get<EmployeeJobDetails[]>(`${this.baseURL}`);
  }

  createEmployeeJob(employee: EmployeeJobDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeJobById(userId: number): Observable<EmployeeJobDetails>{
    return this.httpClient.get<EmployeeJobDetails>(`${this.baseURL}/${userId}`);
  }

  updateEmployeeJob(userId: number, employee: EmployeeJobDetails){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeeJob(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
}
