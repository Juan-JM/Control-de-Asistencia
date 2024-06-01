import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [''],
  })
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  login() {

    if (this.loginForm.valid)
      console.log("Redireccionar al Login");


  }
  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }
}
