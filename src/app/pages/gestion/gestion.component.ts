import { Component,ChangeDetectorRef } from "@angular/core";
import { ApiService } from "../../services/gestion/gestion.service";
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  } from '@angular/material/dialog';
import { error } from "console";
import { Router,NavigationExtras   } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Gestion {
    id?: number;
    anio: number;
    fechaIni: string;
    fechaFin: string;
}

@Component({
    selector: 'app-gesion',
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
}) 



export class GestionComponent{

    mostrarModal: boolean = false;
    estadoVista: string = 'general';

    data: any[]=[];
    newGestion:Gestion = {
        anio: new Date().getFullYear(),
        fechaFin: '',
        fechaIni: ''
    };

    // constructor
    constructor(private apiService:ApiService,private cdr: ChangeDetectorRef,public dialog: MatDialog,private router: Router){}

    // se llama al iniciar
    ngOnInit():void{
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




    crearVista():void{
        this.router.navigate(['/gestion-crear']);
    }
    
    editarVista(gestion: Gestion):void{
        const navigationExtras: NavigationExtras = {
            state: {
                gestion: gestion
            }
        };
        this.router.navigate(['/gestion-editar'], navigationExtras);

    }
    eliminarVista(gestion:Gestion):void{
        const navigationExtras: NavigationExtras = {
            state: {
                gestion: gestion
            }
        };
        this.router.navigate(['/gestion-eliminar'], navigationExtras);

    }
    formatFecha(fecha: string): string {
        const date = new Date(fecha);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    cancelar():void{
        this.estadoVista = 'general';
    }

    abrirModal(): void {
        this.mostrarModal = true;
      }
    
    cerrarModal(): void {
        this.mostrarModal = false;
    }
    


    

}
