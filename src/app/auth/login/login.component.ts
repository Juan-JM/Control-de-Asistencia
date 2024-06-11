import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error, log } from 'console';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
import  { response } from 'express';

interface UsuarioInt{
  usuario:string,
  password:string
}
interface authenticado{
  status: boolean,
  token: string,
  username:string,
  userId:number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginError:string="";
usuarioNuevo: UsuarioInt={
  usuario:'',
  password:''
}
bien:authenticado={
  status: false,
  token: '',
  username:'',
  userId:0
}
credencialFallida:boolean=false;





  loginForm = this.formBuilder.group({
    usuario: ['', [Validators.required]],
    password: ['', Validators.required],
  })


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: LoginService
  ) {}

  get usuario() {
    return this.loginForm.controls.usuario;
  }

  get password() {
    return this.loginForm.controls.password;
  }


  focusPassword(passwordInput: HTMLInputElement) {
    passwordInput.focus();
  }

  login() {
    if (this.loginForm.valid) {

      this.LoginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: userData => {
          console.log(userData);
          window.location.href = '/inicio';
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.loginForm.reset();
        }
      });
    } else {
      alert("Error al ingresar los datos");
    }
  }

  loginToken(){

    if(this.loginForm.value.usuario && this.loginForm.value.password){
      this.usuarioNuevo.usuario = this.loginForm.value.usuario;
      this.usuarioNuevo.password = this.loginForm.value.password;
    }

    this.LoginService.loginApi(this.usuarioNuevo).subscribe(
      (response)=>{
        console.log(response);
        if(response.token == null){
          this.credencialFallida = true;
        }else{
          this.credencialFallida = false;
          this.LoginService.setAuthenticated();
          // window.location.href = '/gestion';
        }
      },
      (error)=>{
        console.log(error);
      }
    );



  }

  // onSubmit(): void {
  //   this.apiService.addGestion(this.newGestion).subscribe(
  //     (response) => {
  //       console.log('agregado');
  //       // this.data.push (response);
  //       // console.log(this.data);
  //       // this.router.navigate(['/gestion']);
  //       window.location.href = '/gestion';
  //       this.newGestion = {
  //         anio: new Date().getFullYear(),
  //         fechaIni: '',
  //         fechaFin: '',
  //       };
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

}
