import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Persona } from './Clases/Persona';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private APIUrl = 'http://localhost:3000/api/Personas';

  constructor(private http: HttpClient) { }

  Mostrar(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.APIUrl);
  }



  DamePersona(nombre: string): Observable<Persona> {
    return this.http.get<Persona>('http://localhost:3000/api/Personas?filter[where][nombre]=Pol' + nombre) ;
  }
}
