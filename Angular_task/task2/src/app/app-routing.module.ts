import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'active',
  component:ActiveComponent
},{
  path:'deleted',
  component:DeletedComponent
},
{
  path:'manage',
  loadChildren:()=>import('./manage/manage.module')
  .then(mod=>mod.ManageModule)
}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
