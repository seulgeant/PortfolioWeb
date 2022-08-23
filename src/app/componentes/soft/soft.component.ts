import { SoftService } from './../../service/soft.service';
import { Component, OnInit } from '@angular/core';
import { Soft } from 'src/app/model/Soft.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  //para lista
  soft: Soft[] = [];
  //para create
  tituloS: string;
  descripcionS: string;
  porcentajeS: number;
  //para update
  sft: Soft =null;

  constructor(private sSoft:SoftService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
 //para lista
    this.cargarSoft();
  }
  cargarSoft(): void {
    this.sSoft.lista().subscribe(data => { this.soft = data });
 this.onDetail(1)
  }
//para create
onCreate(): void {
  const sot = new Soft(this.tituloS, this.descripcionS, this.porcentajeS);
  this.sSoft.save(sot).subscribe(
    data => {
      alert("Proyecto Añadido");
      location.href=location.href;
    }, err => {
      alert("Todos los campos deben estar completos");
      this.router.navigate(['proyectos']);
    })
}

//para delete
Delete(id?: number){
  if(id!=undefined){
    this.sSoft.delete(id).subscribe(
      data=>{
        this.cargarSoft();          
      },err=>{
        alert("no se pudo borrar la Habilidad");
      }
    )
  }
}

//para update

onUpdate(id?: number): void{
this.sSoft.update(id, this.sft).subscribe(
  data => {
    this.router.navigate(['soft']);
    alert("Se ha actualizado la habilidad")
    location.href=location.href;
  }, err =>{
     alert("Error al modificar habilidad");
     this.router.navigate(['soft']);
  }
)
}
onDetail(id?: number){
this.sSoft.detail(id).subscribe(
  data =>{
    this.sft = data;
  }, err =>{
    alert("no se pudo cargar la habilidad");
    this.router.navigate(['']);
  }
)
}
}
