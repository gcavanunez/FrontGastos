import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';

import { ReportComponent } from './report/report.component';
import { ExpenseComponent } from './expense/expense.component';
import { ViewexpenseComponent } from './viewexpense/viewexpense.component';
import { AuthGuard } from '../common/auth-guard.service';
import { AuthService } from '../common/auth.service';
import { AccountService } from './account.service';
import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  declarations: [
    ReportComponent,
    ExpenseComponent,
    ViewexpenseComponent
  ],
  providers: [
    DatePipe,
    AuthService,
    AccountService
  ]
})
export class AccountModule {}