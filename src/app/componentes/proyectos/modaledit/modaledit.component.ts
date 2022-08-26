import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: []
})
export class ModaleditComponent implements OnInit {
  proyupd: Proyecto = null;
  constructor(private sProyecto: ProyectoService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proyupd = data;
      }, err =>{
         alert("Error al modificar");
         this.route.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proyupd).subscribe(
      data => {
        alert('Proyecto Modificado')
        this.route.navigate(['proyectos']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.route.navigate(['proyectos']);
      }
    )
  }

}
