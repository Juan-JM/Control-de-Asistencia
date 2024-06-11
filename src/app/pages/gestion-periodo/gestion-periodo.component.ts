import { Component } from '@angular/core';
import { GestionPeriodoApi } from '../../services/gestion-periodo/gestion.periodo.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

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
@Component({
  selector: 'app-gestion-periodo',
  templateUrl: './gestion-periodo.component.html',
  styleUrl: './gestion-periodo.component.css',
})
export class GestionPeriodoComponent {
  data: any[] = [];

  constructor(private api: GestionPeriodoApi, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.api.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('hubo un error', error);
      }
    );
  }

  crearVista(): void {
    this.router.navigate(['/gestion-periodo-create']);
  }

  editarVista(gestionPeriodo: GestionPeriodo): void {
    const navigationExtras: NavigationExtras = {
      state: {
        dato: gestionPeriodo
      }
    };
    this.router.navigate(['/gestion-periodo-update'], navigationExtras);
  }
  eliminarVista(gestionPeriodo: GestionPeriodo): void {
    const navigationExtras: NavigationExtras = {
      state: {
        dato: gestionPeriodo,
      },
    };
    this.router.navigate(['/gestion-periodo-delete'], navigationExtras);
  }
}
