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
  selector: 'app-delete-carrera',
  templateUrl: './delete-carrera.component.html',
  styleUrl: './delete-carrera.component.css'
})
export class DeleteCarreraComponent {
  public updateCarrera: Carrera;

  constructor(private apiService: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.updateCarrera = navigation?.extras.state?.['carrera'];

    console.log(this.updateCarrera);
  }

  onSubmit(): void {

    this.apiService.deleteCarrera(this.updateCarrera).subscribe(
      (response) => {
        console.log(response);
        window.location.href = '/carrera';
      },
      (error) => {
        console.log(error)
      }
    );
  }
  cancelar(): void {
    window.location.href = '/carrera';
  }
}
