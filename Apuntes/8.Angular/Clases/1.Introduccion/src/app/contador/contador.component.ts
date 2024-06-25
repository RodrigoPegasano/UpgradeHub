import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MensajeLimite } from '../interfaces/mensaje-limite';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {
  /* Props */
  @Input() textoBotonSumar: string = '+';
  @Input() textoBotonRestar: string = '-';

  @Output() onLimiteAlcanzado: EventEmitter<MensajeLimite> =
    new EventEmitter<MensajeLimite>();

  contador: number = 0;

  sumar() {
    this.contador = this.contador + 1;

    if (this.contador === 10) {
      this.onLimiteAlcanzado.emit({contador: this.contador, origen: "Suma"});
    }
  }

  restar() {
    this.contador = this.contador - 1;

    if (this.contador === 10) {
      this.onLimiteAlcanzado.emit({contador: this.contador, origen: "Resta"});
    }
  }

  restart() {
    this.contador = 0;
  }
}
