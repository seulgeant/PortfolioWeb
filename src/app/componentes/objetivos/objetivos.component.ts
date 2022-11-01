import { TokenService } from './../../service/token.service';
import { objetivo } from './../../model/Objetivo.model';
import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from 'src/app/service/objetivo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {
  objetivo: objetivo;
    //para verificar loguer
logged= false;
roles:string[]=[];
isAdmin:boolean=false;


  constructor(private sObjetivo: ObjetivoService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.onDetail();
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

  //para traer datos
  onDetail() {
    this.sObjetivo.detail().subscribe(
      data => {
        this.objetivo = data;
      }, err => {
        alert("no se pudo cargar la experiencia");
      }
    )
  }
  //para update
  onUpdate(): void {
    this.sObjetivo.update(this.objetivo).subscribe(
      data => {
        alert("Los datos han sido modificados");
        location.href = location.href;
      }, err => {
        alert("Los campos no pueden estar vacios");
      }
    )
  }


}
