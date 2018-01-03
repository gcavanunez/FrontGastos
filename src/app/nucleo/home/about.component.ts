import { Component } from '@angular/core';
import { AuthService} from '../../common/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  
}
