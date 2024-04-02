import { Component } from '@angular/core';
import { Card } from '../model/Card';
import { CardColor } from '../model/CardColor';
import { CardValue } from '../model/CardValue';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //card = new Card(CardColor.Clubs, CardValue.Queen)
}
