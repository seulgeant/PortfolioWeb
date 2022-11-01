import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';


@Injectable({
  providedIn: 'root'
})
export class SestudioService {
  //expURL = "Http://localhost:8080/estudio/";
  expURL="https://git.heroku.com/back-portfolioweb-leg.git/estudio/";

  constructor(private httpClient: HttpClient) {
  }

  public lista(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.expURL + 'lista');
  }
  public detail(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.expURL + `detail/${id}`);
  }
  public save(estudio: Estudio):Observable<any> {
    return this.httpClient.post<Estudio>(this.expURL + 'create', estudio);
  }
  public update(id: number, estudio: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, estudio);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}