import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { UserDetailsComponent } from '../User/user-details/user-details.component';


const routes: Routes = [
    {
        path: '',
        component: ManageComponent
    },
    {
        path: 'details/:id',
        component: ManageComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoutingModule {
 }
