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
  selector: 'app-update-carrera',
  templateUrl: './update-carrera.component.html',
  styleUrl: './update-carrera.component.css'
})

export class UpdateCarreraComponent {
  public updateCarrera: Carrera;

  constructor(private apiService: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.updateCarrera = navigation?.extras.state?.['carrera'];

    console.log(this.updateCarrera);
  }


  onSubmit(): void {
    this.apiService.updateCarreraApi(this.updateCarrera).subscribe(
      (response) => {
        console.log(response);
        // this.router.navigate(['/Carrera']);
        window.location.href = '/carrera';

      },
      (error) => {
        console.log(error)
      }
    )
  }
  cancelar(): void {
    // this.router.navigate(['/Carrera']);
    window.location.href = '/carrera';
  }
}
