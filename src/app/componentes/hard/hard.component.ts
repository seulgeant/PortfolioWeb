import { TokenService } from './../../service/token.service';
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
  hrd: Hard;
  //para verificar loguer
logged= false;
roles:string[]=[];
isAdmin:boolean=false;



  constructor(private sHard: HardService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService ) { }

  ngOnInit(): void {
    //para lista
    this.cargarHard();
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
  
  cargarHard(): void {
    this.sHard.lista().subscribe(data => { this.hard = data });
  }
  //para create
  onCreate(): void {
    const had = new Hard(this.tituloH, this.descripcionH, this.porcentajeH);
    this.sHard.save(had).subscribe(
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
      this.sHard.delete(id).subscribe(
        data => {
          this.cargarHard();
        }, err => {
          alert("no se pudo borrar la Habilidad");
        }
      )
    }
  }



}
