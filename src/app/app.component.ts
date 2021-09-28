import { Component } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = "List of Participants"
  participants;
  display;

  constructor (service: AppData){
    this.display = this.participants = service.getParticipants()
  }

  showAll(){
    this.display = this.participants
  }

 G(gender: string){
    this.display = this.participants.filter(participant => participant.gender === gender)
  }

}