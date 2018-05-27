import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from './../../common/employee.json';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }
  public getEmployeeList() {
    return data;
  }
  /**
   * you can use this function if getting data from api
   * @returns {Observable<Object>}
   */
  public getJSON(): Observable<any> {
    return this.http.get("./common/employee.json")
  }
}
