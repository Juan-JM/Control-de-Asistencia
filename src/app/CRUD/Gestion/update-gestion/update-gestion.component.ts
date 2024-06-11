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
  selector: 'app-update-gestion',
  templateUrl: './update-gestion.component.html',
  styleUrl: './update-gestion.component.css'
})

export class UpdateGestionComponent {
  public updateGestion: Gestion;

  constructor(private apiService: ApiService,private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.updateGestion = navigation?.extras.state?.['gestion'];

    console.log(this.updateGestion);
  }


  onSubmit(): void {
      this.apiService.updateGestionApi(this.updateGestion).subscribe(
        (response) =>{
          console.log(response);
          // this.router.navigate(['/gestion']);
          window.location.href = '/gestion';

        },
        (error) =>{
          console.log(error)
        }
      )
  }
  cancelar():void{
    // this.router.navigate(['/gestion']);
    window.location.href = '/gestion';
  }
}
