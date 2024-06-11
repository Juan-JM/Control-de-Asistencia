import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { TableDemoComponent } from './shared/table-demo/table-demo.component';
import { LayoutSidenavNavComponent } from './shared/layout-sidenav-nav/layout-sidenav-nav.component';
import { LayoutSidenavContentComponent } from './shared/layout-sidenav-content/layout-sidenav-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionComponent } from './pages/gestion/gestion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from './CRUD/Gestion/create/create.component';
import { UpdateGestionComponent } from './CRUD/Gestion/update-gestion/update-gestion.component';
import { DeleteGestionComponent } from './CRUD/Gestion/delete-gestion/delete-gestion.component';
import { GestionPeriodoComponent } from './pages/gestion-periodo/gestion-periodo.component';
import { CreateGestionPeriodoComponent } from './CRUD/GestionPeriodo/create-gestion-periodo/create-gestion-periodo.component';
import { UpdateGestionPeriodoComponent } from './CRUD/GestionPeriodo/update-gestion-periodo/update-gestion-periodo.component';
import { DeleteGestionPeriodoComponent } from './CRUD/GestionPeriodo/delete-gestion-periodo/delete-gestion-periodo.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginService } from './services/auth/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    TableDemoComponent,
    LayoutSidenavNavComponent,
    LayoutSidenavContentComponent,
    UsuarioComponent,
    GestionComponent,
    CreateComponent,
    UpdateGestionComponent,
    DeleteGestionComponent,
    GestionPeriodoComponent,
    CreateGestionPeriodoComponent,
    UpdateGestionPeriodoComponent,
    DeleteGestionPeriodoComponent,
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
    provideAnimationsAsync(),
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
