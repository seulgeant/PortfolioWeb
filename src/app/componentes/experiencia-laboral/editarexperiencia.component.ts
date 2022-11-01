import { ImageService } from './../../service/image.service';
import { TokenService } from './../../service/token.service';

import { Experiencia } from './../../model/experiencia.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SExperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: []
})
export class EditarexperienciaComponent implements OnInit {
  experiencia: Experiencia;
  roles: string[] = [];
  role: string = "";
  constructor(private tokenService: TokenService, private sExperienciaService: SExperienciaService, private activatedRoute: ActivatedRoute, private route: Router, public imageService:ImageService) { }

  ngOnInit(): void {

    //verifica admin
    if (this.tokenService.getToken()) {
      this.roles = this.tokenService.getAuthorities();
      for (let rol of this.roles) {
        if (rol == "ROLE_ADMIN") {
          this.role = "ROLE_ADMIN"
          break;
        }
      }
      if (this.role != "ROLE_ADMIN") { this.route.navigate(['']) }
    }
    //trae para modificar
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar");
        this.route.navigate(['']);
      }
    )
  }


  onUpdate(nameImag:string): void{

    const id = this.activatedRoute.snapshot.params['id'];
    this.experiencia.imgE=this.imageService.url;
    this.imageService.deleteimage(nameImag);
    this.experiencia.nImg=this.imageService.name;
    this.sExperienciaService.update(id, this.experiencia).subscribe(
      data => {
        alert('Experiencia Modificada')
        this.route.navigate(['experiencia']);
      }, err => {
        alert("Error al modificar");
        
      }
    )
  }

  uploadImages($event:any){
    const id=this.activatedRoute.snapshot.params['id'];
    const name="experiencia_"+id;
    this.imageService.uploadImages($event,name);

  }

}
