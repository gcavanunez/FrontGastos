import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../common/auth.service';
import { Router } from '@angular/router'
import { ToastrService } from '../../common/toastr.service'

@Component({
  selector: 'header-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.toastr.success('You have been logged out.');
    this.router.navigate(['login']);
    return false;
  }

}
