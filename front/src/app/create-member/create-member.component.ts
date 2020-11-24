import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  member = {name:'', surname:'', phone:'',};
  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNewMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  }
}
