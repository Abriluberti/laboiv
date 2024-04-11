import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    const edadUnoNumber = parseFloat(this.edadUno.toString());
    const edadDosNumber = parseFloat(this.edadDos.toString());

      this.suma = edadUnoNumber + edadDosNumber;
      this.promedio = this.suma / 2;
     
  }
  
  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

