import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService,private router : Router, private appComponent: AppComponent) { }

  selectedMember = { name: '', surname: '', phone:'', adress:'',};
  selected_id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const getId = param.get('id');
      let id = Number(getId);
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id: number){

    this.api.getMember(id).subscribe(
      data => {
        this.selectedMember = data;
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  }
  update(){
    this.api.updateMember(this.selectedMember).subscribe(
      data => {
        this.selectedMember = data;
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  };

  newMember(){
    this.router.navigate(['new-member']);
  }

  deleteMember(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e, i) => {
          if(e.id == this.selected_id){
            index = i;
          }
        });

        this.appComponent.members.splice(Number(index),1);
      },
      error => {
        console.log("Ops", error.message);
      }
    );
  };
}
