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
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './pages/usuario/usuario.component';

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
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
