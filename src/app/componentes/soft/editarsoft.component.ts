import { SoftService } from './../../service/soft.service';
import { Soft } from './../../model/Soft.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarsoft',
  templateUrl: './editarsoft.component.html',
  styleUrls: []
})
export class EditarsoftComponent implements OnInit {
  soft: Soft = null;
  constructor(private sSoft: SoftService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
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
