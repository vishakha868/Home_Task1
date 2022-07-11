import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../User/user/user.component';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[UserComponent]
})
export class SharedModule { }
