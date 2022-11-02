import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from '../model/Soft.model';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  //softURL = "Http://localhost:8080/soft/";
  softURL="https://back-portfolioweb-leg.herokuapp.com/soft/";

  constructor(private httpClient: HttpClient) {
  }

  public lista(): Observable<Soft[]> {
    return this.httpClient.get<Soft[]>(this.softURL + 'lista');
  }
  public detail(id: number): Observable<Soft> {
    return this.httpClient.get<Soft>(this.softURL + `detail/${id}`);
  }
  public save(soft: Soft): Observable<any> {
    return this.httpClient.post<any>(this.softURL + 'create', soft);
  }
  public update(id: number, soft: Soft): Observable<any> {
    return this.httpClient.put<any>(this.softURL + `update/${id}`, soft);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.softURL + `delete/${id}`);
  }
}
