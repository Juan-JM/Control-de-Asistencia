import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableDemoComponent } from './shared/table-demo/table-demo.component';
import { LayoutSidenavNavComponent } from './shared/layout-sidenav-nav/layout-sidenav-nav.component';
import { LayoutSidenavContentComponent } from './shared/layout-sidenav-content/layout-sidenav-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionComponent } from './pages/gestion/gestion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGestionComponent } from './CRUD/Gestion/create-gestion/create-gestion.component';
import { UpdateGestionComponent } from './CRUD/Gestion/update-gestion/update-gestion.component';
import { DeleteGestionComponent } from './CRUD/Gestion/delete-gestion/delete-gestion.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { CreateCarreraComponent } from './CRUD/Carrera/create-carrera/create-carrera.component';
import { UpdateCarreraComponent } from './CRUD/Carrera/update-carrera/update-carrera.component';
import { DeleteCarreraComponent } from './CRUD/Carrera/delete-carrera/delete-carrera.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { LayoutComponent } from './shared/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    TableDemoComponent,
    LayoutSidenavNavComponent,
    LayoutSidenavContentComponent,
    UsuarioComponent,
    GestionComponent,
    CreateGestionComponent,
    UpdateGestionComponent,
    DeleteGestionComponent,
    CarreraComponent,
    CreateCarreraComponent,
    UpdateCarreraComponent,
    DeleteCarreraComponent,
    PeriodoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
