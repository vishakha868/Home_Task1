import { Component, OnInit } from '@angular/core';
import {UserService} from '../User/user.service';
import {User} from '../User/user.model';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  users:User[]=[];
  constructor(private userservice: UserService) { }
  isManage:boolean=false;
  ngOnInit(): void {
    const usersObservable=this.userservice.getStudents();
    usersObservable.subscribe((userData:User[])=>{
      this.users=userData;
    });
  }

}
