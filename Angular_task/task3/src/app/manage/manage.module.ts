import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageComponent } from './manage.component';
import {ManageRoutingModule} from './manage-routing.module';
import { UserListComponent } from '../User/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../User/user-details/user-details.component';

@NgModule({
  declarations: [
    ManageComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ]
})
export class ManageModule { }
