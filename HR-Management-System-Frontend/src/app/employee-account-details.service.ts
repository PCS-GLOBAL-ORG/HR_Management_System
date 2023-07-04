import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAccountDetails } from './employee-account-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAccountDetailsService {
  
  constructor(private httpClient: HttpClient) { }

private baseURL = "http://localhost:8081/accounts/account";

getEmployeesList(): Observable<EmployeeAccountDetails[]>{
  return this.httpClient.get<EmployeeAccountDetails[]>(`${this.baseURL}`);
}

createEmployeeAccountdetails(employee: EmployeeAccountDetails): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, employee);
}

getEmployeeAccountDetailsById(userId: number): Observable<EmployeeAccountDetails>{
  return this.httpClient.get<EmployeeAccountDetails>(`${this.baseURL}/${userId}`);
}

updateEmployeeAccountDetails(userId: number, employee: EmployeeAccountDetails){
  return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
}

deleteEmployeeAccountDetails(userId: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${userId}`);
}
}
