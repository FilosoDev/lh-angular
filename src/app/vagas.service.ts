import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vaga } from './models/Vaga.model';

@Injectable({
  providedIn: 'root'
})

export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) { }

  getVagas(): Observable<Vaga[]> {
    return this._httpClient.get<Vaga[]>(this.url);


  }
}
