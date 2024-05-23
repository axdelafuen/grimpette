import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
  
  goToHome() {
    this.router.navigateByUrl('')
  }

  goToDebug() {
    this.router.navigateByUrl('debug')
  }

  goToGame() {
    this.router.navigateByUrl('game')
  }

}

