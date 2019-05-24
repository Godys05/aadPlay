import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  modality = null;

  constructor( private authService: AuthService, private router: Router) {

  }

  ngOnInit() { 
    $( document ).ready(() => {
      $('select').formSelect();
    });

    this.initForms();
  }

  initForms() {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      role: new FormControl(null, [])

    });
  }

  changeModality(event: any) {
    this.modality = event.target.value;
  }

  register() {
    if (this.registerForm.valid) {
      const user = {
        name: this.registerForm.controls.nombre.value,
        lastName: this.registerForm.controls.apellido.value,
        email: this.registerForm.controls.correo.value,
        password: this.registerForm.controls.password.value,
        role: this.registerForm.controls.role.value,
      };

      this.authService.signUp(user).subscribe(res => {
        if (res.errorCode === 0) {
          console.log('User registered');
          
        } else {
          console.log('User could not be created');
        }
      });
    } else {
      alert('Invalid form');
    }
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
        this.authService.setToken(res.token);
        this.router.navigate(['dashboard']);
        console.log("Exito.");
      }
      else {
        console.log("NO se pudo");
      }
    });
  }

}
