import { Component } from '@angular/core';
import { ApiService } from '../../../services/gestion/gestion.service';
import { Router } from '@angular/router';

interface Gestion {
  id?: number;
  anio: number;
  fechaIni: string;
  fechaFin: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  newGestion: Gestion = {
    anio: new Date().getFullYear(),
    fechaFin: '',
    fechaIni: '',
  };

  constructor(private apiService: ApiService,private router: Router) {}

  onSubmit(): void {
    this.apiService.addGestion(this.newGestion).subscribe(
      (response) => {
        console.log('agregado');
        // this.data.push (response);
        // console.log(this.data);
        // this.router.navigate(['/gestion']);
        window.location.href = '/gestion';
        this.newGestion = {
          anio: new Date().getFullYear(),
          fechaIni: '',
          fechaFin: '',
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelar():void{
    // this.router.navigate(['/gestion']);
    window.location.href = '/gestion';
  }
}
