import { Component } from '@angular/core';
import { GestionPeriodoApi } from '../../../services/gestion-periodo/gestion.periodo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/gestion/gestion.service';

interface GestionPeriodo {
  id: number;
  gestion: {
      id: number;
      anio: number;
      fechaIni: string;
      fechaFin: string;
  };
  periodo: {
      id: number;
      nombre: string;
  };
  inicio_clase: string;
  fin_clase: string;
  evaluacion1: string;
  evaluacion2?: string;
  evaluacion3?: string;
}
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
  selector: 'app-update-gestion-periodo',
  templateUrl: './update-gestion-periodo.component.html',
  styleUrl: './update-gestion-periodo.component.css'
})
export class UpdateGestionPeriodoComponent {

  // public updateData: postData ={
  //   id: 0,
  //   gestion_id:0,
  //   periodo_id:0,
  //   inicio_clase: '',
  //   fin_clase: '',
  //   evaluacion1: '',
  //   evaluacion2: '',
  //   evaluacion3: '',
  // };
  public updateData:postData| undefined;
  public foreing : GestionPeriodo| undefined;
  ListaGestion: any[] = [];
  isDataLoaded = false;


  constructor(private api : GestionPeriodoApi,private router: Router, private gestion:ApiService,private route: ActivatedRoute) {

    this.loadData();

    // this.route.data.subscribe((data) => {
    //   this.foreing = data['dato'];
    //   if (this.foreing) {
    //     this.updateData = this.mapToPostData(this.foreing);
    //   }
    // });

    // console.log(this.updateData);

    const navigation = this.router.getCurrentNavigation();
    this.foreing = navigation?.extras.state?.['dato'];
    console.log(this.foreing);

    // this.updateData ={
    //     id: this.foreing.id,
    //     gestion_id:0,
    //     periodo_id:0,
    //     inicio_clase: '',
    //     fin_clase: '',
    //     evaluacion1: '',
    //     evaluacion2: '',
    //     evaluacion3: '',
    //   };
    // console.log(this.mapToPostData(this.foreing));
    // this.updateData = this.mapToPostData(this.foreing);

  }

  ngOnInit(): void {
    // const navigation = this.router.getCurrentNavigation();
    // this.foreing = navigation?.extras.state?.['dato'];
    // console.log(this.foreing);
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


  mapToPostData(foreing: GestionPeriodo): postData {
    return {
      id: foreing.id,
      gestion_id: foreing.gestion.id,
      periodo_id: foreing.periodo.id,
      inicio_clase: foreing.inicio_clase,
      fin_clase: foreing.fin_clase,
      evaluacion1: foreing.evaluacion1,
      evaluacion2: foreing.evaluacion2,
      evaluacion3: foreing.evaluacion3
    };
  }
  onSubmit(): void {
    console.log(this.foreing);
    // this.api.update(this.guardar).subscribe(
    //   (response) =>{
    //     console.log(response);
    //     window.location.href = '/gestion-periodo';
    //   },
    //   (error) =>{
    //     console.log(error)
    //   }
    // )
}



  

  cancelar():void{
    window.location.href = '/gestion-periodo';
  }
}
