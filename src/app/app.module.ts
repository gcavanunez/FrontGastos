import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';

import { NucleoModule } from './nucleo/nucleo.module';

import { ToastrService } from './common/toastr.service';
import { AuthService } from './common/auth.service';
import { AuthGuard } from './common/auth-guard.service';
import { UserService } from './common/user.service';
import { AccountModule } from './account/account.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UserModule,
    AccountModule,
    NucleoModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    ToastrService,
    AuthGuard,
    UserService
  ]
})
export class AppModule { }
