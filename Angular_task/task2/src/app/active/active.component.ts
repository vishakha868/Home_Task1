import { Component, OnInit } from '@angular/core';
import {UserService} from '../User/user.service';
import {User} from '../User/user.model';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  users:User[]=[];
  isManage:boolean=false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    const usersObservable=this.userservice.getStudents();
    usersObservable.subscribe((userData:User[])=>{
      this.users=userData;
    });
  }

}


