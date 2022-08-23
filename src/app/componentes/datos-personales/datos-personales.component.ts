
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  persona: persona =null;

  constructor(private sPersona:PersonaService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.onDetail();
  }

  //para traer datos
  onDetail(){
    this.sPersona.detail().subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("no se pudo cargar la experiencia");
      }
    )
  }
//para update
onUpdate(): void{
  this.sPersona.update(this.persona).subscribe(
    data => {
      alert("Los datos han sido modificados");
      location.href=location.href;
    }, err =>{
       alert("Error al modificar experiencia");
       location.href=location.href;
    }
  )
}



}
