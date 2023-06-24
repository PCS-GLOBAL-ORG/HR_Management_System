import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeeducationdropdownService {
  private userURL1 = "http://localhost:8081/qualification/ugQualification";
  private userURL2 = "http://localhost:8081/qualification/ugSpecialization";
  private userURL3 = "http://localhost:8081/qualification/ugUniversity";
  private userURL4 = "http://localhost:8081/qualification/pgQualification";
  private userURL5 = "http://localhost:8081/qualification/pgSpecialization";
  private userURL6 = "http://localhost:8081/qualification/pgUniversity";

  constructor(private http:HttpClient) { }

  getUgQualification(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL1);
  }

  getUgSpecialization(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL2);
  }

  getUgUniversity(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL3);
  }

  getPgQualification(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL4);
  }

  getPgSpecialization(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL5);
  }

  getPgUniversity(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL6);
  }
}
