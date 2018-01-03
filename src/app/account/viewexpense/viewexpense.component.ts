import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { AuthService } from '../../common/auth.service';
import { ToastrService } from '../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IExpense } from '../../interfaces/expense';

@Component({
  selector: 'app-viewexpense',
  templateUrl: './viewexpense.component.html',
  styleUrls: ['./viewexpense.component.css']
})

export class ViewexpenseComponent implements OnInit, OnDestroy {
  
  expense: IExpense;
  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getExpense(id);
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    getExpense(id){
      this.accountService.getExpense(id).subscribe(data => {
        if (data.success === false) {
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['login']);
          }
          this.toastr.error(data.message);
        } else {
          if (data.data[0]) {
            this.expense = data.data[0];
          } else {
            this.toastr.error('Expense id is incorrect in the URL');
          }
          
        }
      });
    }
    
    onBack(): void {
        this.router.navigate(['expense/report'], { preserveQueryParams: true });
    }
}