import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { UserComponent } from '../User/user/user.component';




@NgModule({
  declarations: [
    ActiveComponent,
    UserComponent 

  ],
  imports: [
    CommonModule
  ]
})
export class ActiveModule { }
