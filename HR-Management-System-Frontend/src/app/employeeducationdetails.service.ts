import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeEducationDetails } from './employee-education-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeducationdetailsService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/education";

  getEmployeesList(): Observable<EmployeeEducationDetails[]>{
    return this.httpClient.get<EmployeeEducationDetails[]>(`${this.baseURL}`);
  }

  createEmployeeEducationDetails(employee: EmployeeEducationDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeDetailsById(userId: number): Observable<EmployeeEducationDetails>{
    return this.httpClient.get<EmployeeEducationDetails>(`${this.baseURL}/${userId}`);
  }

  updateEmployeeEducationDetails(userId: number, employee: EmployeeEducationDetails){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeeEducationDetails(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
}
