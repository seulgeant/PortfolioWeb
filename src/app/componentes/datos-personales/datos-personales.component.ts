import { ImageService } from './../../service/image.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  logged= false;
  roles:string[]=[];
  persona: persona;
  isAdmin:boolean=false;

  constructor(private sPersona: PersonaService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService,private activatedRoute: ActivatedRoute,public imageService:ImageService) { }

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
    this.sPersona.detail().subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("no se pudo cargar la experiencia");
      }
    )
  }
  //para update
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img=this.imageService.url;
    this.sPersona.update(this.persona).subscribe(
      data => {
        alert("Los datos han sido modificados");
        location.href = location.href;
      }, err => {
        alert("Los datos no pueden estar vacios y ingresar solo numeros en campos numericos");
      }
    )
  }

  uploadImages($event:any){
    const id=this.activatedRoute.snapshot.params['id'];
    const name="persona";
    this.imageService.uploadImages($event,name);

  }

}
