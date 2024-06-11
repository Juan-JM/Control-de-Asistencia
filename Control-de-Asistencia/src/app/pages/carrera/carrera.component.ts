import { Component, ChangeDetectorRef } from "@angular/core";
import { ApiService } from "../../services/carrera/carrera.service";
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';

interface Carrera {
  id?: number,
  nombre: string,
  sigla: string,
  sistema_academico: string
}

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})

export class CarreraComponent {

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
    this.router.navigate(['/carrera-crear']);
    // this.estadoVista = 'crear';
  }

  editarVista(carrera: Carrera): void {
    const navigationExtras: NavigationExtras = {
      state: {
        carrera: carrera
      }
    };
    this.router.navigate(['/carrera-editar'], navigationExtras);
    // this.estadoVista = 'editar';
  }
  eliminarVista(carrera: Carrera): void {
    const navigationExtras: NavigationExtras = {
      state: {
        carrera: carrera
      }
    };
    this.router.navigate(['/carrera-eliminar'], navigationExtras);
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
