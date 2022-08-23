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
  empresaE: string = "";
  cargoE: string = "";
  desdeE: string = "";
  hastaE: string = "";
  domicilioE: string = "";
  descripcionE: string = "";
  imgE: string = "";
  //para update
  expedit: Experiencia = null;






  constructor(private sExperiencia: SExperienciaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //para lista
    this.cargarExperiencia();
    //para update



  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.experiencia = data });
    this.onDetail(1);
  }

  //para create
  onCreate(): void {
    const expe = new Experiencia(this.empresaE, this.cargoE, this.desdeE, this.hastaE, this.domicilioE, this.descripcionE, this.imgE);
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
  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("no se pudo borrar la experiencia");
        }
      )
    }
  }

  //para update

  onUpdate(id?: number): void {
    this.sExperiencia.update(id, this.expedit).subscribe(
      data => {
        alert("Se agrego Experiencia");
        location.href = location.href;
      }, err => {
        alert("Error al modificar experiencia");

      }
    )
  }
  onDetail(id?: number) {
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expedit = data;
      }, err => {
        alert("Eno se pudo cargar la experiencia");
        this.router.navigate(['']);
      }
    )
  }


}
