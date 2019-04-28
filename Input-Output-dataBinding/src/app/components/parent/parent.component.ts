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

  // delete other child
  public deleteOtherChild: boolean = true;

  constructor() { } 

  ngOnInit() {
  }

  public setDataFromChild (data) {
    console.log("data: ",data)
    this.valueFromChildToParent = data;
  }

  public setDeleteOtherChild (data) {
    console.log("data: ",data);
    this.deleteOtherChild = data

  }

}
