import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationdropdownService {

  private userURL = "http://localhost:8081/location/locations";

  constructor(private http:HttpClient) { }

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL);
  }
}
