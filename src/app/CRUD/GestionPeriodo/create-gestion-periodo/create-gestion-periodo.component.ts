import { Component } from '@angular/core';
import { GestionPeriodoApi } from '../../../services/gestion-periodo/gestion.periodo.service';
import { ApiService } from '../../../services/gestion/gestion.service';
import { response } from 'express';
import { error } from 'console';

// interface postData {
//   id?: number;
//   gestion_id:number|undefined;
//   periodo_id:number|undefined;
//   inicio_clase: string;
//   fin_clase: string;
//   evaluacion1: string;
//   evaluacion2?: string;
//   evaluacion3?: string;
// }

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
  selector: 'app-create-gestion-periodo',
  templateUrl: './create-gestion-periodo.component.html',
  styleUrl: './create-gestion-periodo.component.css'
})

export class CreateGestionPeriodoComponent {


  guardar : postData = {
    id:0,
    gestion_id:undefined,
    periodo_id:undefined,
    inicio_clase: '',
    fin_clase: '',
    evaluacion1: '',
    evaluacion2: '',
    evaluacion3: '',
  }

  constructor(private api: GestionPeriodoApi,private gestion:ApiService) {}
  // getters
  ListaGestion: any[] = [];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.gestion.getData().subscribe(
      (response) => {
        this.ListaGestion = response;
      },
      (error) => {
        console.error('hubo un error', error);
      }
    )
  }

  onSubmit(): void {
    this.guardar.periodo_id = 1;
    console.log(this.guardar);
      this.api.add(this.guardar).subscribe(
        (response)=>{
          // console.log(response);
        window.location.href = '/gestion-periodo';

        },
        (error)=>{
          console.log(error);

        }
      );
    
    // this.api.add (this.newGestion).subscribe(
    //   (response) => {
    //     console.log('agregado');
    //     window.location.href = '/gestion-periodo';
       
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  cancelar():void{
    window.location.href = '/gestion-periodo';
  }
}
