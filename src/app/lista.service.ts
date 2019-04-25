import { Injectable } from '@angular/core';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista: Persona[] = [];

  constructor() {

    this.lista[0] = new Persona ('Miguel', 'MMM', 'Profesor', 0);
    this.lista[1] = new Persona ('Roc', 'RRR', 'Profesor', 0);
    this.lista[2] = new Persona ('Pol', 'PPP', 'Alumno', 0);
    this.lista[3] = new Persona ('Sergio', 'SSS', 'Alumno', 0);
    this.lista[4] = new Persona ('Albert', 'AAA', 'Alumno', 0);
  }

  Mostrar(): Persona[] {
    return this.lista;
  }

  Incrementar(nombre: string): Persona[] {
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
    return this.lista;
  }

  Eliminar(nombre: string) {
    this.lista = this.lista.filter(persona => persona.nombre !== nombre);
    return this.lista;
  }

  OrdenarPuntos(): Persona [] {
    this.lista = this.lista.sort(
      // tslint:disable-next-line:only-arrow-functions
      function(obj1, obj2) {
          return obj2.puntos - obj1.puntos;
      });

    return this.lista;
  }

  PonPersona(persona: Persona): Persona [] {
    this.lista.push(persona);
    return this.lista;
  }

  Autentificar(nombre: string, pass: string): Persona {
    let user: Persona[] = [];
    user = this.lista.filter(persona => persona.nombre === nombre && persona.pass === pass);

    if (user.length === 0) {
      return null;
    } else {
      return user[0];
    }
  }

  CambiaPass(nombre: string, nuevoPass: string) {
    this.lista.filter(persona => persona.nombre === nombre)[0].pass = nuevoPass;
  }

  DamePersona(nombre: string): Persona {
    return this.lista.filter(persona => persona.nombre === nombre)[0];
  }
}
