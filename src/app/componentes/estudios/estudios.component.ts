import { SestudioService } from './../../service/sestudio.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  //para lista
  estudio: Estudio[] = [];
  //para create
  nivel: string;
  institucion: string;
  titulo: string;
  desde: string;
  hasta: string;
  estado: string;
  imgest: string;
  //para update
 estupd: Estudio =null;
  




  constructor(private sEstudio:SestudioService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //para lista
    this.cargarEstudio();
    //para update
  


  }

  cargarEstudio(): void {
    this.sEstudio.lista().subscribe(data => { this.estudio = data });
    this.onDetail(1);
  }

  //para create
  onCreate(): void {
    const est = new Estudio(this.nivel,this.institucion,this.titulo,this.desde,this.hasta,this.estado,this.imgest);
    this.sEstudio.save(est).subscribe(
      data => {
        alert("Experiencia Añadida");
        this.router.navigate(['estudios']);
        location.href=location.href;
      }, err => {
        alert("Todos los campos deben estar completos");
        this.router.navigate(['estudios']);
      })
  }

  //para delete
  delete(id?: number){
    if(id!=undefined){
      this.sEstudio.delete(id).subscribe(
        data=>{
          this.cargarEstudio();          
        },err=>{
          alert("no se pudo borrar la estudio");
        }
      )
    }
  }

//para update

onUpdate(id?: number): void{
  this.sEstudio.update(id, this.estupd).subscribe(
    data => {
      this.router.navigate(['estudios']);
      location.href=location.href;
    }, err =>{
       alert("Error al modificar experiencia");
       this.router.navigate(['estudios']);
    }
  )
}
onDetail(id?: number){
  this.sEstudio.detail(id).subscribe(
    data =>{
      this.estupd = data;
    }, err =>{
      alert("no se pudo cargar la experiencia");
      this.router.navigate(['']);
    }
  )
}

}
