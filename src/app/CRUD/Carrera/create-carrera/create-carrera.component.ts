import { Component } from '@angular/core';
import { ApiService } from '../../../services/carrera/carrera.service';
import { Router } from '@angular/router';

interface Carrera {
  id?: number,
  nombre: string,
  sigla: string,
  sistema_academico: string
}
@Component({
  selector: 'app-create-carrera',
  templateUrl: './create-carrera.component.html',
  styleUrl: './create-carrera.component.css'
})
export class CreateCarreraComponent {
  newCarrera: Carrera = {
    nombre: '',
    sigla: '',
    sistema_academico: '',
  };

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit(): void {
    this.apiService.addCarrera(this.newCarrera).subscribe(
      (response) => {
        console.log('agregado');
        // this.data.push (response);
        // console.log(this.data);
        // this.router.navigate(['/Carrera']);
        window.location.href = '/carrera';
        this.newCarrera = {
          nombre: '',
          sigla: '',
          sistema_academico: '',
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelar(): void {
    // this.router.navigate(['/Carrera']);
    window.location.href = '/carrera';
  }
}
