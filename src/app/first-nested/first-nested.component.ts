// IMPORT INPUT, OUTPUT, EVENTEMITTER
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-first-nested",
  templateUrl: "./first-nested.component.html",
  styleUrls: ["./first-nested.component.css"]
})
export class FirstNestedComponent implements OnInit {

  @Input() studentFromParent;
  @Output() onSend = new EventEmitter(); //listener

  // "x" is just placeholder, can be anything
  sendTheData(x){
    this.onSend.emit(x)
  }

  constructor() {}

  ngOnInit() {}
}
