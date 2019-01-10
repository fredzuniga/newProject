import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template: `<h1>{{ titleJuego }}</h1>`
})

export class VideojuegosComponent {
    public titleJuego = 'Último juego';
}