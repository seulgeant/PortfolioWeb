import { SoftService } from './../../service/soft.service';
import { Component, OnInit } from '@angular/core';
import { Soft } from 'src/app/model/Soft.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

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
  sft: Soft;
    //para verificar loguer
    logged= false;
    roles:string[]=[];
    isAdmin:boolean=false;

  constructor(private sSoft: SoftService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService) { }

  ngOnInit(): void {
    //para lista
    this.cargarSoft();
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
  cargarSoft(): void {
    this.sSoft.lista().subscribe(data => { this.soft = data });
  }
  //para create
  onCreate(): void {
    const sot = new Soft(this.tituloS, this.descripcionS, this.porcentajeS);
    this.sSoft.save(sot).subscribe(
      data => {
        alert("Habilidad Añadida");
        location.href = location.href;
      }, err => {
        alert("no se permiten campos vacios, ni habilidades repetidas");
      })
  }

  //para delete
  Delete(id?: number) {
    if (id != undefined) {
      this.sSoft.delete(id).subscribe(
        data => {
          this.cargarSoft();
        }, err => {
          alert("no se pudo borrar la Habilidad");
        }
      )
    }
  }

}
