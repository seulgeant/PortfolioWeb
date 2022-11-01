import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { FondoComponent } from './componentes/fondo/fondo.component';
import { HardComponent } from './componentes/hard/hard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ObjetivosComponent } from './componentes/objetivos/objetivos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SoftComponent } from './componentes/soft/soft.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EditarexperienciaComponent } from './componentes/experiencia-laboral/editarexperiencia.component';
import { EditarhardComponent } from './componentes/hard/editarhard.component';
import { ModaleditComponent } from './componentes/proyectos/modaledit/modaledit.component';
import { EditarestudiosComponent } from './componentes/estudios/editarestudios.component';
import { EditarsoftComponent } from './componentes/soft/editarsoft.component';
import { provideStorage,getStorage } from '@angular/fire/storage';

const routes:Routes=[
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent},
  {path:'datos-personales',component:DatosPersonalesComponent},
  {path:'objetivos', component:ObjetivosComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'experiencia', component:ExperienciaLaboralComponent},
  {path:'hard', component:HardComponent},
  {path:'soft', component:SoftComponent},
  {path:'proyectos', component:ProyectosComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    FondoComponent,
    HardComponent,
    HeaderComponent,
    HomeComponent,
    MenubarComponent,
    ObjetivosComponent,
    ProyectosComponent,
    SoftComponent,
    EditarestudiosComponent,
    EditarexperienciaComponent,
    EditarhardComponent,
    ModaleditComponent,
    EditarsoftComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
