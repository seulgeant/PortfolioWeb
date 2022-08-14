import { ReferenciasComponent } from './../componentes/referencias/referencias.component';
import { ProyectosComponent } from './../componentes/proyectos/proyectos.component';
import { SoftComponent } from './../componentes/soft/soft.component';
import { HardComponent } from './../componentes/hard/hard.component';
import { ExperienciaLaboralComponent } from './../componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './../componentes/estudios/estudios.component';
import { ObjetivosComponent } from './../componentes/objetivos/objetivos.component';
import { DatosPersonalesComponent } from './../componentes/datos-personales/datos-personales.component';
import { HomeComponent } from './../componentes/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
{path:'inicio', component:HomeComponent},
{path:'datos-personales',component:DatosPersonalesComponent},
{path:'objetivos', component:ObjetivosComponent},
{path:'estudios', component:EstudiosComponent},
{path:'experiencia', component:ExperienciaLaboralComponent},
{path:'hard', component:HardComponent},
{path:'soft', component:SoftComponent},
{path:'proyectos', component:ProyectosComponent},
{path:'referencias', component:ReferenciasComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),    
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
