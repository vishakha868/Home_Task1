import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static getStudents() {
    throw new Error('Method not implemented.');
  }
 Users:User[]=[
  {
    id:'1',
    firstName:'One',
    lastName:'User',
    age:21,
    login:'User1',
    password:'123',
    isDeleted:true

  },
  {
    id:'2',
    firstName:'Two',
    lastName:'User',
    age:21,
    login:'User2',
    password:'123',
    isDeleted:false

  },
  {
    id:'3',
    firstName:'Three',
    lastName:'User',
    age:21,
    login:'User3',
    password:'123',
    isDeleted:true

  },
  {
    id:'4',
    firstName:'Four',
    lastName:'User',
    age:21,
    login:'User4',
    password:'123',
    isDeleted:false

  },
  {
    id:'5',
    firstName:'Five',
    lastName:'User',
    age:21,
    login:'User5',
    password:'123',
    isDeleted:false

  },
  {
    id:'6',
    firstName:'Six',
    lastName:'User',
    age:21,
    login:'User6',
    password:'123',
    isDeleted:true

  },
  {
    id:'7',
    firstName:'Seven',
    lastName:'User',
    age:21,
    login:'User7',
    password:'123',
    isDeleted:false

  },
  {
    id:'8',
    firstName:'Eight',
    lastName:'User',
    age:21,
    login:'User8',
    password:'123',
    isDeleted:false

  },
  {
    id:'9',
    firstName:'Nine',
    lastName:'User',
    age:21,
    login:'User9',
    password:'123',
    isDeleted:false

  },
  {
    id:'10',
    firstName:'Ten',
    lastName:'User',
    age:21,
    login:'User10',
    password:'123',
    isDeleted:false

  }
]
id:number=-1;
  constructor() { }
  public getStudents():any{
    const usersObservable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.Users);
      },1000);
    });
    return usersObservable;
  }
  public setID(id:number):any{
      this.id=id;
  }
  public getID():any{
    return this.id;
}

}
