import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ExpenseComponent } from './expense/expense.component';
import { ViewexpenseComponent } from './viewexpense/viewexpense.component';
import { AuthGuard } from '../common/auth-guard.service';




const routes: Routes = [
    {path: "expense", children:[
      { path: 'report', canActivate: [ AuthGuard], component: ReportComponent },
      { path: '', canActivate: [ AuthGuard], component: ExpenseComponent },
      { path: ':id', canActivate: [ AuthGuard], component: ExpenseComponent },
      { path: 'view/:id', canActivate: [ AuthGuard], component: ViewexpenseComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
