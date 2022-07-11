import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:User[]=[];
@Input() isManage:any;
  constructor(private userservice: UserService) { }
@Output() idEvent=new EventEmitter<any>();
  ngOnInit(): void {
    const usersObservable=this.userservice.getStudents();
    usersObservable.subscribe((userData:User[])=>{
      this.users=userData;
    });
  }
  receiveID(event:any){
    console.log(event)
     this.idEvent.emit(event);
  }

}
