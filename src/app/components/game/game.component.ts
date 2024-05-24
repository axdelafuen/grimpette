import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Game } from '../../model/Game';
import { Card } from '../../model/Card';
import { TrumpCard } from '../../model/TrumpCard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports: [CdkDropList, CdkDrag, CommonModule],
})
export class GameComponent {
  game = new Game()

  drop(event: CdkDragDrop<(Card | TrumpCard)[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}