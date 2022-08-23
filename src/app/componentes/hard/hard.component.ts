import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hard } from 'src/app/model/Hard.model';
import { HardService } from 'src/app/service/hard.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
  //para lista
  hard: Hard[] = [];
  //para create
  tituloH: string;
  descripcionH: string;
  porcentajeH: number;
  //para update
  hrd: Hard =null;
  constructor(private sHard:HardService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     //para lista
     this.cargarHard();
  }
  cargarHard(): void {
    this.sHard.lista().subscribe(data => { this.hard = data });
 this.onDetail(1)
  }
//para create
onCreate(): void {
  const had = new Hard(this.tituloH, this.descripcionH, this.porcentajeH);
  this.sHard.save(had).subscribe(
    data => {
      alert("Habilidad Añadido");
      location.href=location.href;
    }, err => {
      alert("Todos los campos deben estar completos");
      location.href=location.href;
    })
}

//para delete
Delete(id?: number){
  if(id!=undefined){
    this.sHard.delete(id).subscribe(
      data=>{
        this.cargarHard();          
      },err=>{
        alert("no se pudo borrar la Habilidad");
      }
    )
  }
}

//para update

onUpdate(id?: number): void{
this.sHard.update(id, this.hrd).subscribe(
  data => {
    this.router.navigate(['hard']);
    alert("Se ha actualizado la habilidad")
    location.href=location.href;
  }, err =>{
     alert("Error al modificar habilidad");
     location.href=location.href;
  }
)
}
onDetail(id?: number){
this.sHard.detail(id).subscribe(
  data =>{
    this.hrd = data;
  }, err =>{
    alert("no se pudo cargar la habilidad");
    this.router.navigate(['']);
  }
)
}

}
