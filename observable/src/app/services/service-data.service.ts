import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  private _url = '/assets/data/employees.json';

  constructor( private http: HttpClient) { }

  //https://www.youtube.com/watch?v=LmIsbzt-S_E&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=21
    // getEmployees() :Observable<IEmployee[]> {
   //   return this.http.get<IEmployee[]>(this._url);
   // }
   getEmployees(){
    return [
          {
              "id": "10",
              "firstName": "Kathleen",
              "lastName": "Byrne",
              "title": "Sales Representative",
              "picture": "http://coenraets.org/directory/pics/Kathleen_Byrne.jpg",
              "reportCount": "0"
          },
          {
              "id": "9",
              "firstName": "Gary",
              "lastName": "Donovan",
              "title": "Marketing",
              "picture": "http://coenraets.org/directory/pics/Gary_Donovan.jpg",
              "reportCount": "0"
          },
          {
              "id": "7",
              "firstName": "Paula",
              "lastName": "Gates",
              "title": "Software Architect",
              "picture": "http://coenraets.org/directory/pics/Paula_Gates.jpg",
              "reportCount": "0"
          },
          {
              "id": "11",
              "firstName": "Amy",
              "lastName": "Jones",
              "title": "Sales Representative",
              "picture": "http://coenraets.org/directory/pics/Amy_Jones.jpg",
              "reportCount": "0"
          },
          {
              "id": "6",
              "firstName": "Paul",
              "lastName": "Jones",
              "title": "QA Manager",
              "picture": "http://coenraets.org/directory/pics/Paul_Jones.jpg",
              "reportCount": "0"
          },
          {
              "id": "1",
              "firstName": "James",
              "lastName": "King",
              "title": "President and CEO",
              "picture": "http://coenraets.org/directory/pics/James_King.jpg",
              "reportCount": "4"
          },
          {
              "id": "3",
              "firstName": "Eugene",
              "lastName": "Lee",
              "title": "CFO",
              "picture": "http://coenraets.org/directory/pics/Eugene_Lee.jpg",
              "reportCount": "0"
          },
          {
              "id": "5",
              "firstName": "Ray",
              "lastName": "Moore",
              "title": "VP of Sales",
              "picture": "http://coenraets.org/directory/pics/Ray_Moore.jpg",
              "reportCount": "2"
          },
          {
              "id": "2",
              "firstName": "Julie",
              "lastName": "Taylor",
              "title": "VP of Marketing",
              "picture": "http://coenraets.org/directory/pics/Julie_Taylor.jpg",
              "reportCount": "2"
          },
          {
              "id": "12",
              "firstName": "Steven",
              "lastName": "Wells",
              "title": "Software Architect",
              "picture": "http://coenraets.org/directory/pics/Steven_Wells.jpg",
              "reportCount": "0"
          },
          {
              "id": "4",
              "firstName": "John",
              "lastName": "Williams",
              "title": "VP of Engineering",
              "picture": "http://coenraets.org/directory/pics/John_Williams.jpg",
              "reportCount": "3"
          },
          {
              "id": "8",
              "firstName": "Lisa",
              "lastName": "Wong",
              "title": "Marketing Manager",
              "picture": "http://coenraets.org/directory/pics/Lisa_Wong.jpg",
              "reportCount": "0"
          }
      ]
  }
}
