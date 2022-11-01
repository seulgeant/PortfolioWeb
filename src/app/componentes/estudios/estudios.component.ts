import { ImageService } from './../../service/image.service';
//import { FileHandle } from './../../model/file-handle.model';
import { TokenService } from './../../service/token.service';
import { SestudioService } from './../../service/sestudio.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { DomSanitizer } from '@angular/platform-browser';


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
  nameImg:string;
 // estudioImages:FileHandle[]=[];
  //para update
  estupd: Estudio;
  //para verificar loguer
  logged= false;
  roles:string[]=[];
  isAdmin:boolean=false;





  constructor(private sEstudio: SestudioService, private route: ActivatedRoute, private router: Router,private tokenService:TokenService,public imageService:ImageService) { }

  ngOnInit(): void {
    //para lista
    this.cargarEstudio();
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

  cargarEstudio(): void {
    this.sEstudio.lista().subscribe(data => { this.estudio = data });
  }

  //para create
  onCreate(): void {
    this.imgest=this.imageService.url;
    const est = new Estudio(this.nivel, this.institucion, this.titulo, this.desde, this.hasta, this.estado, this.imgest,this.nameImg);
   // const estudioFormData=this.prepareFormData(est)
    this.sEstudio.save(est).subscribe(
      data => {
        alert("Experiencia Añadida");
        location.href = location.href;
      }, err => {
        alert("Todos los campos deben estar completos");
      })
  }

  
  //para delete
  delete(nameImagen:string,id?: number) {
    if (id != undefined) {
      this.imageService.deleteimage(nameImagen)
      this.sEstudio.delete(id).subscribe(
        data => {
          this.cargarEstudio();
        }, err => {
          alert("no se pudo borrar el estudio");
          this.cargarEstudio();
        }
      )
    }
  }



  newImages($event:any){
    //const id=this.activatedRoute.snapshot.params['id'];
    this.nameImg=$event.target.files[0].name;
    this.imageService.newImages($event);
    
  }
/*onFileSelected(event: any){
if (event.target.files){
  const file=event.target.files[0];

const fileHandle:FileHandle = {
  file:file,
  url:this.sanitizier.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
 }
this.estudioImages.push(fileHandle)

}
}*/

/*prepareFormData(estudio:Estudio):FormData{
    const formData=new FormData();
    formData.append(
      'dtoest',
      new Blob([JSON.stringify(this.estudio)],{type:'application/json'})
    );
    for(var i=0;i<this.estudioImages.length;i++){
    formData.append(
      'imageFile',
      this.estudioImages[i].file,
      this.estudioImages[i].file.name
    );
    }
    return formData;
  }
*/
}
