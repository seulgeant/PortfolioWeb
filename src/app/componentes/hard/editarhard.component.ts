import { HardService } from './../../service/hard.service';
import { Component, OnInit } from '@angular/core';
import { Hard } from 'src/app/model/Hard.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editarhard',
  templateUrl: './editarhard.component.html',
  styleUrls: []
})
export class EditarhardComponent implements OnInit {
  hard: Hard;
  roles: string[] = [];
  role: string = "";

  constructor(private tokenService:TokenService,private sHard: HardService, private activatedRoute:ActivatedRoute, private route:Router) { }

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
    this.sHard.detail(id).subscribe(
      data =>{
        this.hard = data;
      }, err =>{
         alert("Error al modificar");
         this.route.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sHard.update(id, this.hard).subscribe(
      data => {
        alert('Habilidad Modificada')
        this.route.navigate(['hard']);
      }, err => {
        alert("Error al modificar");
        
      }
    )
  }

}
