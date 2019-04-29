import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employees = [];

  constructor( private _employeeService: ServiceDataService ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data ) ;
  }

}
