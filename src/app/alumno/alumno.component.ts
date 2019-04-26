import { Component, OnInit } from '@angular/core';
import { Persona } from '../Clases/Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  nuevoPass: string;
  alumno: Persona;

  constructor(private servicioLista: ListaService,
              private dbServices: DbServiceService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.dbServices.DamePersona(nombre)
      .subscribe(alumno => this.alumno = alumno);
  }

  Cambia() {
    this.servicioLista.CambiaPass(this.alumno.nombre, this.nuevoPass);
  }

  goBack() {
    this.location.back();
  }
}
