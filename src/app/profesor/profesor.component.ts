import { Component, OnInit } from '@angular/core';
import { Persona } from '../Clases/Persona';
import { ListaService } from '../lista.service';
import { Location } from '@angular/common';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {


  lista: Persona[] = [];
  nombre: string;
  pass: string;
  rol: string;
  puntos: number;

  constructor(private servicioLista: ListaService,
              private dbService: DbServiceService,
              private location: Location) { }

  ngOnInit() {
  }

  Mostrar() {
    // this.lista = this.servicioLista.Mostrar();
    console.log('Voy a pedir');
    this.dbService.Mostrar()
    .subscribe(lista => {
                          this.lista = lista;
                          console.log ('Ya ha llegado');
                          console.log (this.lista);
                        }
              );
    console.log('Ya me he suscrito');
  }

  Incrementar(nombre: string) {
    this.lista = this.servicioLista.Incrementar (nombre);
  }

  Eliminar(nombre: string) {
    this.lista = this.servicioLista.Eliminar(nombre);
  }

  OrdenarPuntos() {
    this.lista = this.servicioLista.OrdenarPuntos();
  }

  Pon() {
    this.lista = this.servicioLista.PonPersona(new Persona (this.nombre, this.pass, this.rol, this.puntos));
  }

  GoBack() {
    this.location.back();
  }
}

