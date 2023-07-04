import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesdropdownService {

  private userURL = "http://localhost:8081/role/roles";
  constructor(private http:HttpClient) { }

  getroles(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL);
  }

}
