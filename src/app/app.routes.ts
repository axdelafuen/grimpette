import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DebugComponent } from './components/debug/debug.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
    {
        path: '',
        children:[
            {path: 'debug', component: DebugComponent},
            {path: 'game', component: GameComponent}
        ]
    }
];
