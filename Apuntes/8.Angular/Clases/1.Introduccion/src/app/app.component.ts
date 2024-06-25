import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { MensajeLimite } from './interfaces/mensaje-limite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {

  variable: string = ""

  // Para utilizar tipo useEffect
  ngOnInit(): void {
    // hacer peticion axios a backend

    // obtener datos...
  }

  limiteAlcanzado(valor: MensajeLimite) {
    console.log(
      'Un contador ha alcanzado el valor de ' +
        valor.contador +
        ' desde ' +
        valor.origen
    );
  }
}