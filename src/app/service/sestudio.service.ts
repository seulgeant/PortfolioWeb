import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';


@Injectable({
  providedIn: 'root'
})
export class SestudioService {
  //estURL = "Http://localhost:8080/estudio/";
  //estURL="https://back-portfolioweb-leg.herokuapp.com/estudio/";
  estURL="https://leg-backportfolio.onrender.com/estudio/";
  
  constructor(private httpClient: HttpClient) {
  }

  public lista(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.estURL + 'lista');
  }
  public detail(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.estURL + `detail/${id}`);
  }
  public save(estudio: Estudio):Observable<any> {
    return this.httpClient.post<Estudio>(this.estURL + 'create', estudio);
  }
  public update(id: number, estudio: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.estURL + `update/${id}`, estudio);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.estURL + `delete/${id}`);
  }
}