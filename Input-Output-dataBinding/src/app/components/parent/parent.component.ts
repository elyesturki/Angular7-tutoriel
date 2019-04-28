import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // from parent to child
  valueFromParent = "Hello from parent";

  // from child to parent
  public valueFromChildToParent: string;

  constructor() { } 

  ngOnInit() {
  }

  public setDataFromChild (data) {
    console.log("data: ",data)
    this.valueFromChildToParent = data;
  }

}
