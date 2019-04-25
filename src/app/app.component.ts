import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  numero: number;
  resultado: number;

  Duplicar() {
    console.log ('voy a duplicar');
    this.resultado = this.numero * 2;
    console.log (this.resultado);
  }
}
