import { TokenService } from './../../service/token.service';
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
  empresaP: string;
  //para update
  proyupd: Proyecto;
  idn: number;
    //para verificar loguer
    logged= false;
    roles:string[]=[];
    isAdmin:boolean=false;


  constructor(private sProyecto: ProyectoService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService) { }

  ngOnInit(): void {
    //para lista
    this.cargarProyecto();
//para logger
if(this.tokenService.getToken()){
  this.logged=true;
  this.roles=this.tokenService.getAuthorities();
  for(let rol of this.roles){
 if(rol=="ROLE_ADMIN"){
  this.isAdmin=true
  break;
 }else{this.isAdmin=false}
}
}else{
  this.logged=false;
  this.router.navigate(['']);
}
  }


  cargarProyecto(): void {

    this.sProyecto.lista().subscribe(data => { this.proyecto = data });
  }
  //para create
  onCreate(): void {
    const proye = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.url, this.empresaP);
    this.sProyecto.save(proye).subscribe(
      data => {
        alert("Proyecto Añadido");
        location.href = location.href;
      }, err => {
        alert("no se permiten campos vacios, ni proyectos repetidos");
      })
  }

  //para delete
  Delete(id?: number) {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("no se pudo borrar el proyecto");
        }
      )
    }
  }

  //para update

 

}
