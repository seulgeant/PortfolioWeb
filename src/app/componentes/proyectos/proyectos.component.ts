import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //para lista
  proyecto: Proyecto[] = [];
  //para create
  nombreP: string;
  fechaP: string;
  descripcionP: string;
  url: string;
  empresaP:string;
  //para update
  proyupd: Proyecto =null;



  constructor(private sProyecto:ProyectoService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
       //para lista
       this.cargarProyecto();
  }
  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.proyecto = data });
    this.onDetail(1);
  }
//para create
onCreate(): void {
  const proye = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.url,this.empresaP);
  this.sProyecto.save(proye).subscribe(
    data => {
      alert("Proyecto Añadido");
      this.router.navigate(['proyectos']);
    }, err => {
      alert("Todos los campos deben estar completos");
      this.router.navigate(['proyectos']);
    })
}

//para delete
Delete(id?: number){
  if(id!=undefined){
    this.sProyecto.delete(id).subscribe(
      data=>{
        this.cargarProyecto();          
      },err=>{
        alert("no se pudo borrar el proyecto");
      }
    )
  }
}

//para update

onUpdate(id?: number): void{
this.sProyecto.update(id, this.proyupd).subscribe(
  data => {
    this.router.navigate(['proyectos']);
    location.href=location.href;
  }, err =>{
     alert("Error al modificar proyeco");
     this.router.navigate(['proyectos']);
  }
)
}
onDetail(id?: number){
this.sProyecto.detail(id).subscribe(
  data =>{
    this.proyupd = data;
  }, err =>{
    alert("no se pudo cargar el Proyecto");
    this.router.navigate(['']);
  }
)
}
  
}
