import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule
  ],
  declarations: [
    ProfileComponent,
    PasswordComponent,
  ],
  providers: [
  ]
})
export class UserModule {}