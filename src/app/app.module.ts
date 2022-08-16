import { AppRoutingModule } from './app-routing.module.ts.module';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ObjetivosComponent } from './componentes/objetivos/objetivos.component';
import { SoftComponent } from './componentes/soft/soft.component';
import { HardComponent } from './componentes/hard/hard.component';
import { FondoComponent } from './componentes/fondo/fondo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    HomeComponent,
    DatosPersonalesComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    ProyectosComponent,
    ObjetivosComponent,
    SoftComponent,
    HardComponent,
    FondoComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
