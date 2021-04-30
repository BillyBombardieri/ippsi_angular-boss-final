import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Arme } from 'src/app/core/models/arme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArmeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Arme[]> {
    return this.httpClient.get<Arme[]>(environment.apis.armes.url);
  }

  getOne(idArme: number): Observable<Arme> {
    return this.httpClient.get<Arme>(environment.apis.armes.url + '/' + idArme);
  }

  saveOne(arme: Arme): Observable<Arme> {
    return this.httpClient.post<Arme>(environment.apis.armes.url, arme);
  }
}
