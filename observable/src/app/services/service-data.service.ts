import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  // api: http://dummy.restapiexample.com/  
  private _url = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor( private http: HttpClient) { }

  //https://www.youtube.com/watch?v=LmIsbzt-S_E&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=21
    getEmployees() :Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this._url);
    }
}
