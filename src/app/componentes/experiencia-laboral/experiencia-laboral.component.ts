import { ImageService } from './../../service/image.service';
import { TokenService } from './../../service/token.service';
import { SExperienciaService } from './../../service/s-experiencia.service';
import { Experiencia } from '../../model/experiencia.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  //para lista
  experiencia: Experiencia[] = [];
  //para create
  empresaE: string;
  cargoE: string;
  desdeE: string;
  hastaE: string;
  domicilioE: string;
  descripcionE: string;
  imgE: string;
  nImg: string;
  //para update
  expedit: Experiencia = null;
//para verificar loguer
logged= false;
roles:string[]=[];
isAdmin:boolean=false;





  constructor(private sExperiencia: SExperienciaService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService,public imageService:ImageService) { }

  ngOnInit(): void {
    //para lista
    this.cargarExperiencia();
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

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.experiencia = data });
  }

  //para create
  onCreate(): void {
    this.imgE=this.imageService.url;
    const expe = new Experiencia(this.empresaE, this.cargoE, this.desdeE, this.hastaE, this.domicilioE, this.descripcionE, this.imgE,this.nImg);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia Añadida");
        location.href = location.href;
      }, err => {
        alert("Todos los campos deben estar completos");
        this.router.navigate(['experiencia']);
      })
  }

  //para delete
  delete(id?: number,nameImagen?:string) {
    if (id != undefined) {
      this.imageService.deleteimage(nameImagen)
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("no se pudo borrar la experiencia");
        }
      )
    }
  }
  newImages($event:any){
    this.nImg=$event.target.files[0].name;
    this.imageService.newImages($event);
    
  }
  
}
