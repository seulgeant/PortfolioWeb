import { HardService } from './../../service/hard.service';
import { Component, OnInit } from '@angular/core';
import { Hard } from 'src/app/model/Hard.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarhard',
  templateUrl: './editarhard.component.html',
  styleUrls: []
})
export class EditarhardComponent implements OnInit {
  hard: Hard = null;
  constructor(private sHard: HardService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
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
