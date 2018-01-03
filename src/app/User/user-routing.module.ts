import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "user", children:[
    {path: "", component: ProfileComponent},
    {path: "change-password", component: PasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
