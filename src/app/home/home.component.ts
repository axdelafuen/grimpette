import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Game } from '../model/Game';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //init = new InitDeck()
  
  game = new Game()
}