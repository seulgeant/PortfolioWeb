import { EditarsoftComponent } from './componentes/soft/editarsoft.component';
import { EditarestudiosComponent } from './componentes/estudios/editarestudios.component';
import { ModaleditComponent } from './componentes/proyectos/modaledit/modaledit.component';
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
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarexperienciaComponent } from './componentes/experiencia-laboral/editarexperiencia.component';
import { EditarhardComponent } from './componentes/hard/editarhard.component';


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
    FondoComponent,
    ModaleditComponent,
    EditarestudiosComponent,
    EditarexperienciaComponent,
    EditarhardComponent,
    EditarsoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
