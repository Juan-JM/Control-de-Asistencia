import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
//gestion
import { GestionComponent } from './pages/gestion/gestion.component';
import { CreateGestionComponent } from './CRUD/Gestion/create-gestion/create-gestion.component';
import { UpdateGestionComponent } from './CRUD/Gestion/update-gestion/update-gestion.component';
import { DeleteGestionComponent } from './CRUD/Gestion/delete-gestion/delete-gestion.component';
//carrera
import { CarreraComponent } from './pages/carrera/carrera.component';
import { CreateCarreraComponent } from './CRUD/Carrera/create-carrera/create-carrera.component';
import { UpdateCarreraComponent } from './CRUD/Carrera/update-carrera/update-carrera.component';
import { DeleteCarreraComponent } from './CRUD/Carrera/delete-carrera/delete-carrera.component';
//periodo
import { PeriodoComponent } from './pages/periodo/periodo.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'inicio',component:DashboardComponent},
  {path:'usuario',component:UsuarioComponent},
  // gestion
  {path: 'gestion', component:GestionComponent},
  {path: 'gestion-crear', component:CreateGestionComponent},
  {path: 'gestion-editar', component:UpdateGestionComponent},
  {path: 'gestion-eliminar', component:DeleteGestionComponent},
  //carrera
  {path: 'carrera', component:CarreraComponent},
  {path: 'carrera-crear', component:CreateCarreraComponent},
  {path: 'carrera-editar', component:UpdateCarreraComponent},
  {path: 'carrera-eliminar', component:DeleteCarreraComponent},
  //periodo
  {path: 'periodo', component:PeriodoComponent},
  {path: 'periodo-crear', component:CreateCarreraComponent},
  {path: 'periodo-editar', component:UpdateCarreraComponent},
  {path: 'periodo-eliminar', component:DeleteCarreraComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
