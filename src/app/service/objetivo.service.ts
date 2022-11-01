import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { objetivo } from '../model/Objetivo.model';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {
  //objURL = "Http://localhost:8080/objetivo/";
  objURL="https://git.heroku.com/back-portfolioweb-leg.git/objetivo/";
  constructor(private httpClient: HttpClient) { }

  public detail(): Observable<objetivo> {
    return this.httpClient.get<objetivo>(this.objURL + 'detail');
  }

  public update(objetivo: objetivo): Observable<any> {
    return this.httpClient.put<any>(this.objURL + `update`, objetivo);
  }
}