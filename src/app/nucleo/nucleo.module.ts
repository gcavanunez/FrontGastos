import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRouting } from '../app-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './home/about.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  declarations: [ 
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,

],
  exports: [
    HeaderComponent,
    AppRouting
  ]
})
export class NucleoModule { }