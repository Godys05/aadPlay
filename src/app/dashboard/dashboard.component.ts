import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  role = 'user';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
  }

}
