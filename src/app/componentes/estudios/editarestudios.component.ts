import { TokenService } from './../../service/token.service';
import { Estudio } from './../../model/estudio.model';
import { SestudioService } from './../../service/sestudio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarestudios',
  templateUrl: './editarestudios.component.html',
  styleUrls: []
})
export class EditarestudiosComponent implements OnInit {
  estudio: Estudio = null;
  roles: string[] = [];
  role: string = "";


  constructor(private tokenService:TokenService,private sEstudio: SestudioService, private activatedRoute:ActivatedRoute, private route:Router) { }

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
      // trae datos

    const id = this.activatedRoute.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data =>{
        this.estudio = data;
      }, err =>{
         alert("Error al modificar");
         this.route.navigate(['']);
      }
    )
    
  }


  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEstudio.update(id, this.estudio).subscribe(
      data => {
        alert('Estudio Modificado')
        this.route.navigate(['estudios']);
      }, err => {
        alert("Error al modificar");
        
      }
    )
  }

}
