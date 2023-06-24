import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeOfficeDetails } from './employee-office-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeeofficedetailsService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/officeDetails/office";

  getEmployeesOfficeDetailsList(): Observable<EmployeeOfficeDetails[]>{
    return this.httpClient.get<EmployeeOfficeDetails[]>(`${this.baseURL}`);
  }

  createEmployeeOfficeDetails(employee: EmployeeOfficeDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeOfficeDetailsById(userId: number): Observable<EmployeeOfficeDetails>{
    return this.httpClient.get<EmployeeOfficeDetails>(`${this.baseURL}/${userId}`);
  }

  updateEmployeeOfficeDetails(userId: number, employee: EmployeeOfficeDetails){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeeOfficeDetails(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
}
