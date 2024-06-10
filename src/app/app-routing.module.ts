import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { CreateComponent } from './CRUD/Gestion/create/create.component';
import { UpdateGestionComponent } from './CRUD/Gestion/update-gestion/update-gestion.component';
import { DeleteGestionComponent } from './CRUD/Gestion/delete-gestion/delete-gestion.component';
import { GestionPeriodoComponent } from './pages/gestion-periodo/gestion-periodo.component';
import { CreateGestionPeriodoComponent } from './CRUD/GestionPeriodo/create-gestion-periodo/create-gestion-periodo.component';
import { UpdateGestionPeriodoComponent } from './CRUD/GestionPeriodo/update-gestion-periodo/update-gestion-periodo.component';
import { DeleteGestionPeriodoComponent } from './CRUD/GestionPeriodo/delete-gestion-periodo/delete-gestion-periodo.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'inicio',component:DashboardComponent},
  {path:'usuario',component:UsuarioComponent},
  // gestion
  {path: 'gestion', component:GestionComponent},
  {path: 'gestion-crear', component:CreateComponent},
  {path: 'gestion-editar', component:UpdateGestionComponent},
  {path: 'gestion-eliminar', component:DeleteGestionComponent},
  // gestion-periodo
  {path: 'gestion-periodo', component:GestionPeriodoComponent},
  {path: 'gestion-periodo-create', component:CreateGestionPeriodoComponent},
  {path: 'gestion-periodo-update', component:UpdateGestionPeriodoComponent},
  {path: 'gestion-periodo-delete', component:DeleteGestionPeriodoComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
