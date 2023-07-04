import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeeofficedetailsdropdownService {
private userURL1 = "http://localhost:8081/officeDetails/parentDetails";
private userURL2 = "http://localhost:8081/officeDetails/subIou";
private userURL3 = "http://localhost:8081/emp/employees";
private userURL4 = "http://localhost:8081/officeDetails/tpcsGrade";
private userURL5 = "http://localhost:8081/officeDetails/tpcsLocation";
private userURL6 = "http://localhost:8081/officeDetails/baseBranch";
private employeeStatusUrl = "http://localhost:8081/officeDetails/employeeStatus"


constructor(private http:HttpClient) { }

getParentDetails(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL1);
}

getSubIou(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL2);
}

getSupervisor(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL3);
}

getTpcsGrade(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL4);
}

getTpcsLocation(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL5);
}

getBaseBranch(): Observable<any[]> {
  return this.http.get<any[]>(this.userURL6);
}

getEmployeeStatuses(): Observable<string[]> {
  return this.http.get<string[]>(this.employeeStatusUrl);
}

}
