import { Component, ChangeDetectorRef } from "@angular/core";
import { ApiService } from "../../services/periodo/periodo.service";
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';

interface Periodo {
  id?: number,
  nombre: string,
}

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.css'
})
export class PeriodoComponent {
  mostrarModal: boolean = false;
  estadoVista: string = 'general';

  data: any[] = [];
  // constructor
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef, public dialog: MatDialog, private router: Router) { }

  // se llama al iniciar
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('hubo un error', error);
      }
    );
  }

  crearVista(): void {
    this.router.navigate(['/periodo-crear']);
    // this.estadoVista = 'crear';
  }

  editarVista(periodo: Periodo): void {
    const navigationExtras: NavigationExtras = {
      state: {
        periodo: periodo
      }
    };
    this.router.navigate(['/periodo-editar'], navigationExtras);
    // this.estadoVista = 'editar';
  }
  eliminarVista(periodo: Periodo): void {
    const navigationExtras: NavigationExtras = {
      state: {
        periodo: periodo
      }
    };
    this.router.navigate(['/periodo-eliminar'], navigationExtras);
    // this.estadoVista = 'eliminar';
  }
  cancelar(): void {
    this.estadoVista = 'general';
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
