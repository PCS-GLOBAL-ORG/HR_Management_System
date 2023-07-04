import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeePersonalDetails } from './employee-personal-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeepersonaldetailsService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/emp/personal";
  private baseURL1 = "http://localhost:8081/emp/countryDetails";

  getEmployeesList(): Observable<EmployeePersonalDetails[]>{
    return this.httpClient.get<EmployeePersonalDetails[]>(`${this.baseURL}`);
  }

  createEmployeepersonaldetails(employee: EmployeePersonalDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeDetailsById(userId: number): Observable<EmployeePersonalDetails>{
    return this.httpClient.get<EmployeePersonalDetails>(`${this.baseURL}/${userId}`);
  }

  updateEmployeePersonalDetails(userId: number, employee: EmployeePersonalDetails){
    return this.httpClient.put(`${this.baseURL}/${userId}`, employee);
  }

  deleteEmployeePersonalDetails(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }

  getCountry(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseURL1);
  }
}
