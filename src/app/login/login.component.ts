import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { 

  }

  ngOnInit() { 
    $( document ).ready(() => {
      $('select').formSelect();
    });
  }

  logIn() {
    const user = {
      name: "Benito", 
      lastName: "Camelo",
      email: "benito69@gmail.com",
      password: "elBeni69",
      role: "student"
    };
    this.authService.logIn(user).subscribe((res) => {
      if (res.errorCode===0) {
        console.log("Exito.");
      }
      else {
        console.log("NO se pudo");
      }
    });
  }

}
