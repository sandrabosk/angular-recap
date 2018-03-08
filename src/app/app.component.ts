import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  title = "Practice";
// object in parent component
 student = {
   name: "Sandra",
   class: "Web Dev"
 }

 // function that gets executed when listener is triggered
 receiveData(e){
   alert("I am bringing data from child component.")
 }

}
