import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Participants';

  participants = [
    {name: "Mary", age:22, gender:"Female"},
    {name: "Luke", age:20, gender:"Male"},
    {name: "Samatha", age:15, gender:"Female"},
    {name: "Jacob", age:19, gender:"Male"},
    {name: "Nicole", age:21, gender:"Female"},
  ];

constructor(){
  console.log(this.participants);
}

sortM(){

}

sortF(){

}
  
}


