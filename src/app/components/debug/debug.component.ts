import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Game } from '../../model/Game';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './debug.component.html'
})
export class DebugComponent {
  game = new Game()
}