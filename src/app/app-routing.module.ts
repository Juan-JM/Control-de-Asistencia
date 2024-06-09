import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { CreateComponent } from './CRUD/Gestion/create/create.component';
import { UpdateGestionComponent } from './CRUD/Gestion/update-gestion/update-gestion.component';
import { DeleteGestionComponent } from './CRUD/Gestion/delete-gestion/delete-gestion.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
