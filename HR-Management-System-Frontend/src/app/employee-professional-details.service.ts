import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeProfessionalDetails } from './employee-professional-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfessionalDetailsService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/professional/empdetails";

  getEmployeesList(): Observable<EmployeeProfessionalDetails[]>{
    return this.httpClient.get<EmployeeProfessionalDetails[]>(`${this.baseURL}`);
  }

  createEmployeeProfessionaldetails(employee: EmployeeProfessionalDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeDetailsById(userId: number): Observable<EmployeeProfessionalDetails>{
    return this.httpClient.get<EmployeeProfessionalDetails>(`${this.baseURL}/${userId}`);
  }

  updateEmployeeProfessionalDetails(userId: number, employee: EmployeeProfessionalDetails){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeeProfessionalDetails(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
}
