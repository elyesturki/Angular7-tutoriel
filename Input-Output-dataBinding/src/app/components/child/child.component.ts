import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  // from parent to child
  @Input() public valFromP:string;


  // from child to parent
  public valueFromChild = "Hello from child";
  @Output() eventFromChild:EventEmitter<string> = new EventEmitter();

  // delete other child
  public toDelete:boolean =false;
  @Output() eventDeleteChild:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    console.log("sendToParent")
    this.eventFromChild.emit(this.valueFromChild);
  }

  deleteOtherChild() {
    this.eventDeleteChild.emit(this.toDelete)
  }

}
