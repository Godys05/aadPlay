import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  role = 'user';

  constructor(private authService: AuthService, private router: Router) { 
      this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  ngOnInit() {
    this.authService.isAuth.subscribe( res => {
      console.log('Auth changed');
      if (res && res !== null) {
          this.isLoggedIn = true;
      } else {
          this.isLoggedIn = false;
      }
    });
    $(document).ready(function() {
      $('.modal').modal();
      $('.dropdown-trigger').dropdown();
      $('.tooltipped').tooltip();
    });
  }

}
