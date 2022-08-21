import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
persona:persona=new persona("","","","","","","",0,"","","","","");


  constructor(public PersonaService: PersonaService) { }

  ngOnInit(): void {
    this.PersonaService.getPersona().subscribe(data =>{this.persona=data})
  }

}
