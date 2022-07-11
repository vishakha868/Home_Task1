import { Component, OnInit } from '@angular/core';
import { UserService } from '../User/user.service';
import{User} from '../User/user.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
 isManage:boolean=true;
 id:number=-1;
 users!:User[]
 user:User
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute){ 
  this.user = {
    id: '-1',
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: true
  }}
  ngOnInit(): void {
 if(this.activatedRoute.snapshot.params['id']!=0){
  // this.userService.setID();
  // console.log(this.id);
  this.id=this.activatedRoute.snapshot.params['id'];
  const usersObservable=this.userService.getStudents();
  usersObservable.subscribe((userData:User[])=>{
    this.users=userData;
    console.log(this.users);
 this.users.forEach((user)=>{parseInt(user.id)==this.id?this.user=user:0});
 console.log(this.user)
 })}
  }
  receiveID(event:any){
    this.userService.setID(event);
    console.log(this.id);
    this.id=this.userService.getID();
    const usersObservable=this.userService.getStudents();
    usersObservable.subscribe((userData:User[])=>{
      this.users=userData;
      console.log(this.users);
   this.users.forEach((user)=>{parseInt(user.id)==this.id?this.user=user:0});
   console.log(this.user)
  }
)}

}
