import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logged= false;
logginFail=true;
loguinUsuario!:LoginUsuario;
nombreUsuario!:string;
password!:string;
roles:string[]=[];
errMsj!:string;

  constructor( private tokenService:TokenService, private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {
if (this.tokenService.getToken()){
  this.logged=true;
  this.logginFail=false;
  this.roles=this.tokenService.getAuthorities();
}
  }

  OnLogin():void{
    this.loguinUsuario=new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loguinUsuario).subscribe(data =>{
      this.logged=true;
      this.logginFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles=data.authorities;
      alert('se ha logueado correctamente');
      location.href = location.href;
    },err =>{
      this.logged=false;
      this.logginFail=true;
      this.errMsj=err.error.mensaje;
      console.log(this.errMsj);
      alert('No se ha podido Loguear correctamente');
    })
  }
  Logout(){
this.tokenService.logOut();
//window.location.href = 'http://localhost:4200';
window.location.href = 'https://leg-portfolio.web.app/inicio';
  }

}