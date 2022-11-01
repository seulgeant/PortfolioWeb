import { Injectable } from '@angular/core';
import { Hard } from './../model/Hard.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardService {
  //hardURL = "Http://localhost:8080/hard/"
  hardURL="https://git.heroku.com/back-portfolioweb-leg.git/hard/";

  constructor(private httpClient: HttpClient) {
  }

  public lista(): Observable<Hard[]> {
    return this.httpClient.get<Hard[]>(this.hardURL + 'lista');
  }
  public detail(id: number): Observable<Hard> {
    return this.httpClient.get<Hard>(this.hardURL + `detail/${id}`);
  }
  public save(hard: Hard): Observable<any> {
    return this.httpClient.post<any>(this.hardURL + 'create', hard);
  }
  public update(id: number, hard: Hard): Observable<any> {
    return this.httpClient.put<any>(this.hardURL + `update/${id}`, hard);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hardURL + `delete/${id}`);
  }
}
