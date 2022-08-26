import { SoftService } from './../../service/soft.service';
import { Soft } from './../../model/Soft.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editarsoft',
  templateUrl: './editarsoft.component.html',
  styleUrls: []
})
export class EditarsoftComponent implements OnInit {
  soft: Soft = null;
  roles: string[] = [];
  role: string = "";

  constructor(private tokenService:TokenService,private sSoft: SoftService, private activatedRoute:ActivatedRoute, private route:Router) { }

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
    this.sSoft.detail(id).subscribe(
      data =>{
        this.soft = data;
      }, err =>{
         alert("Error al modificar");
         this.route.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSoft.update(id, this.soft).subscribe(
      data => {
        alert('Habilidad Modificada')
        this.route.navigate(['soft']);
      }, err => {
        alert("Error al modificar");
        
      }
    )
  }

}
