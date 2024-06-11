import { Component } from '@angular/core';
import { GestionPeriodoApi } from '../../../services/gestion-periodo/gestion.periodo.service';
import { Router } from '@angular/router';
interface postData {
  id?: number;
  gestion_id:number|undefined;
  periodo_id:number|undefined;
  inicio_clase: string;
  fin_clase: string;
  evaluacion1: string;
  evaluacion2?: string;
  evaluacion3?: string;
}
@Component({
  selector: 'app-delete-gestion-periodo',
  templateUrl: './delete-gestion-periodo.component.html',
  styleUrl: './delete-gestion-periodo.component.css'
})
export class DeleteGestionPeriodoComponent {
  public updateData: postData;

  constructor(private api : GestionPeriodoApi,private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.updateData = navigation?.extras.state?.['dato'];

    console.log(this.updateData);
  }

  onSubmit(): void {

    this.api.delete(this.updateData).subscribe(
      (response) =>{
        console.log(response);
        // this.router.navigate(['/gestion']);
        window.location.href = '/gestion-periodo';
      },
      (error) =>{
        console.log(error)
      }
    );
}


  cancelar():void{
    window.location.href = '/gestion-periodo';
  }
}
