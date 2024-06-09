import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginError:string="";

  loginForm = this.formBuilder.group({
    email: ['user@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private LoginService: LoginService) { }


  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.LoginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData => {
          console.log(userData);
        }),
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("login completo");
          this.router.navigateByUrl('/inicio').then(() => {
            // window.location.reload();
          });
          this.loginForm.reset();
        }
      });
    } else {
      alert("Error al ingresar los datos");
    }
  }

}
