import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*toDatosPersonales(){
  document.getElementById("datos")?.scroll({behavior:"smooth"});
}*/
}


