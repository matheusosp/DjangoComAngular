import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  members = [
    {name:'Member 01', id:1, surname: 'Ciclano 1', photo:'http://www.myapp.com/photo1'},
    {name:'Member 02', id:2, surname: 'Ciclano 2', photo:'http://www.myapp.com/photo2'},
    {name:'Member 03', id:3, surname: 'Ciclano 3', photo:'http://www.myapp.com/photo3'},
  ];

  constructor( private api : ApiService){
    this.getMembers();
  }

  getMembers = () => {  
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  };
  onMemberClick = ( member: { id: number; } ) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  }
}
