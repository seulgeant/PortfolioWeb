import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from './../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL= "Http://localhost:8080/auth/"
  authURL="https://back-portfolioweb-leg.herokuapp.com/auth/";

  constructor(private httpClient:HttpClient) { }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario)
  }
}
